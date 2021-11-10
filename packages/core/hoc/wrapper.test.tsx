import React, { FC, ReactNode } from 'react';

import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import withWrapper from './wrapper';
import compose from './compose';

describe('Test @rb/core/hoc/wrapper', () => {
  test('wrapper', () => {
    interface P {
      data: string;
    }

    interface W {
      children?: (result: string) => ReactNode;
      result: string;
    }

    interface M {
      result: string;
    }

    const TestComponent:FC<P & M> = ({ result, data }) => (
      <div>
        {result}
        {data}
      </div>
    );

    const Wrapper:FC<W> = ({ children, result }) => (
      <div>
        {children && children(result)}
      </div>
    );

    Wrapper.displayName = 'WrapperHOC';

    const Container = withWrapper(Wrapper, { result: 'test' }, result => ({ result }));

    const Component = Container(TestComponent as FC) as FC<P>;

    expect(Component.displayName).toEqual(Wrapper.displayName);

    const component = renderer.create(<Component data="data" />);

    const result = component.toJSON() as ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.props).toBeDefined();
    expect(JSON.stringify(result.props)).toEqual('{}');
    expect(result.children).toBeDefined();
    expect(result.children?.length).toEqual(1);

    const [cmp] = result.children as ReactTestRendererJSON[];

    expect(cmp).toBeDefined();
    expect(cmp.type).toEqual('div');
    expect(cmp.props).toBeDefined();
    expect(JSON.stringify(result.props)).toEqual('{}');
    expect(cmp.children).toBeDefined();
    expect(JSON.stringify(cmp.children)).toEqual(JSON.stringify(['test', 'data']));
  });

  test('wrapper with compose', () => {
    interface P {
      data: string;
    }

    interface W {
      children?: (result: string) => ReactNode;
      result: string;
    }

    interface M {
      result: string;
    }

    const TestComponent:FC<P & M> = ({ result, data }) => (
      <div>
        {result}
        {data}
      </div>
    );

    const Wrapper:FC<W> = ({ children, result }) => (
      <div>
        {children && children(result)}
      </div>
    );

    Wrapper.displayName = 'WrapperHOC';

    const Container = compose(
      withWrapper(Wrapper, { result: 'test' }, result => ({ result })),
    );

    const Component = Container(TestComponent as FC) as FC<P>;

    expect(Component.displayName).toEqual(Wrapper.displayName);

    const component = renderer.create(<Component data="data" />);

    const result = component.toJSON() as ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.props).toBeDefined();
    expect(JSON.stringify(result.props)).toEqual('{}');
    expect(result.children).toBeDefined();
    expect(result.children?.length).toEqual(1);

    const [cmp] = result.children as ReactTestRendererJSON[];

    expect(cmp).toBeDefined();
    expect(cmp.type).toEqual('div');
    expect(cmp.props).toBeDefined();
    expect(JSON.stringify(result.props)).toEqual('{}');
    expect(cmp.children).toBeDefined();
    expect(JSON.stringify(cmp.children)).toEqual(JSON.stringify(['test', 'data']));
  });
});
