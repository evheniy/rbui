import React, { FC } from 'react';

import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import withHooks from './hooks';
import compose from './compose';

describe('Test @rb/core/hoc/hooks', () => {
  test('Hooks', () => {
    interface Base {
      data: string;
    }

    interface Hook {
      test: string;
    }

    const TestComponent: FC<Base & Hook> = ({ data, test }) => (
      <div>
        {data}
        {test}
      </div>
    );

    const Container = withHooks<Base, Hook>(
      () => ({ test: '123' }),
      { displayName: 'TEST' },
    );

    const Component: FC<Base> = Container(TestComponent as FC<Base>);

    expect(Component.displayName).toEqual('TEST');

    const component = renderer.create(<Component data="data" />);

    const result = component.toJSON() as ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.props).toBeDefined();
    expect(JSON.stringify(result.props)).toEqual('{}');
    expect(result.children).toBeDefined();
    expect(JSON.stringify(result.children)).toEqual(JSON.stringify(['data', '123']));
  });

  test('Hooks with 2 containers', () => {
    interface Base {
      data: string;
    }

    interface Hook {
      test: string;
    }

    interface Hook2 {
      test2: string;
    }

    const TestComponent: FC<Base & Hook & Hook2> = ({ data, test, test2 }) => (
      <div>
        {data}
        {test}
        {test2}
      </div>
    );

    const Container = withHooks<Base, Hook>(
      () => ({ test: '123' }),
      { displayName: 'TEST' },
    );

    const Container2 = withHooks<Base, Hook2>(
      () => ({ test2: '1234' }),
      { displayName: 'TEST2' },
    );

    // const Component: FC<Base> = Container2(Container(TestComponent as FC<Base>));
    const Component: FC<Base> = Container(TestComponent as FC<Base>);
    const Component2: FC<Base> = Container2(Component as FC<Base>);

    expect(Component.displayName).toEqual('TEST');
    expect(Component2.displayName).toEqual('TEST2');

    const component = renderer.create(<Component2 data="data" />);

    const result = component.toJSON() as ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.props).toBeDefined();
    expect(JSON.stringify(result.props)).toEqual('{}');
    expect(result.children).toBeDefined();
    expect(JSON.stringify(result.children)).toEqual(JSON.stringify(['data', '123', '1234']));
  });

  test('Hooks with compose', () => {
    interface Base {
      data: string;
    }

    interface Hook {
      test: string;
    }

    interface Hook2 {
      test2: string;
    }

    const TestComponent: FC<Base & Hook & Hook2> = ({ data, test, test2 }) => (
      <div>
        {data}
        {test}
        {test2}
      </div>
    );

    const Container = compose(
      withHooks<Base, Hook>(
        () => ({ test: '123' }),
        { displayName: 'TEST' },
      ),
      withHooks<Base, Hook2>(
        () => ({ test2: '1234' }),
        { displayName: 'TEST2' },
      ),
    );

    const Component: FC<Base> = Container(TestComponent as FC<Base>);

    expect(Component.displayName).toEqual('TEST');

    const component = renderer.create(<Component data="data" />);

    const result = component.toJSON() as ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.props).toBeDefined();
    expect(JSON.stringify(result.props)).toEqual('{}');
    expect(result.children).toBeDefined();
    expect(JSON.stringify(result.children)).toEqual(JSON.stringify(['data', '123', '1234']));
  });
});
