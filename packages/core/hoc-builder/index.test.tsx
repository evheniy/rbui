import React, { useState } from 'react';

import renderer, { act, ReactTestRendererJSON } from 'react-test-renderer';

import { P, FCP } from '@rb/core/types';

import useToggle from '@rb/core/use-toggle';
import compose from '@rb/core/compose';

import hocBuilder from '.';

const TestComponent: FCP = ({ isToggled, toggle, ...rest }: P) => (
  <>
    <div>{JSON.stringify(rest)}</div>
    <button type="button" onClick={toggle}>{isToggled ? 'Toggled' : 'Click to Toggle'}</button>
  </>
);

interface JsonTest {
  (result: ReactTestRendererJSON[], props: P, toggled: boolean): void;
}

const jsonTest: JsonTest = (result, props = {}, toggled: boolean): void => {
  expect(result).toBeDefined();

  const [propsComponent, buttonComponent] = result;

  expect(propsComponent).toBeDefined();
  expect(propsComponent.type).toEqual('div');
  expect(propsComponent.children).toBeDefined();
  expect(propsComponent.children?.length).toEqual(1);
  expect(propsComponent.children?.[0]).toEqual(JSON.stringify(props));

  expect(buttonComponent).toBeDefined();
  expect(buttonComponent.type).toEqual('button');
  expect(buttonComponent.props.type).toEqual('button');
  expect(buttonComponent.children).toBeDefined();
  expect(buttonComponent.children?.length).toEqual(1);

  expect(buttonComponent.children?.[0]).toEqual(toggled ? 'Toggled' : 'Click to Toggle');
};

interface HocBuilderTest {
  (Component: FCP, props: P): void;
}

const hocBuilderTest: HocBuilderTest = (Component, props) => {
  const component = renderer.create(<Component {...props} />);

  const result = component.toJSON() as ReactTestRendererJSON[];

  jsonTest(result, props, props.toggled);

  if (result[1].props.onClick) {
    act(() => {
      result[1].props.onClick();
    });

    jsonTest(component.toJSON() as ReactTestRendererJSON[], props, !props.toggled);
  }
};

describe('Test @rb/core/hoc-builder', () => {
  test('normal flow', () => {
    const props = { toggled: true };

    const Container = hocBuilder(({ toggled }: P) => {
      const [isToggled, toggle] = useState<boolean>(toggled);

      return { isToggled, toggle };
    });

    hocBuilderTest(Container(TestComponent), props);
  });

  test('use toggle', () => {
    const props = { toggled: true };

    const Container = hocBuilder(({ toggled }: P) => {
      const [isToggled, toggle] = useToggle(toggled);

      return { isToggled, toggle };
    });

    hocBuilderTest(Container(TestComponent), props);
  });

  test('without props', () => {
    const Container = hocBuilder(() => {
      const [isToggled, toggle] = useState<boolean>(true);

      return { isToggled, toggle };
    });

    hocBuilderTest(Container(TestComponent), { toggled: true });
  });

  test('without returned props', () => {
    const props = { toggled: false };

    const Container = hocBuilder(p => p);

    hocBuilderTest(Container(TestComponent), props);
  });

  test('empty hooks', () => {
    const Container = hocBuilder();

    hocBuilderTest(Container(TestComponent), { toggled: false });
  });

  test('no return', () => {
    const Container = hocBuilder(() => undefined);

    hocBuilderTest(Container(TestComponent), { toggled: false });
  });

  test('displayName', () => {
    const props = { toggled: true };

    const Container = hocBuilder(({ toggled }: P) => {
      const [isToggled, toggle] = useToggle(toggled);

      return { isToggled, toggle };
    }, 'TEST');

    const Component = Container(TestComponent);

    expect(Component.displayName).toEqual('TEST');

    hocBuilderTest(Component, props);
  });

  test('with compose', () => {
    const props = { toggled: true };

    const Container = hocBuilder(({ toggled }: P) => {
      const [isToggled, toggle] = useToggle(toggled);

      return { isToggled, toggle };
    }, 'TEST');

    const Compose = compose(Container);

    const Component = Compose(TestComponent);

    expect(Component.displayName).toEqual('TEST');

    hocBuilderTest(Component, props);
  });
});
