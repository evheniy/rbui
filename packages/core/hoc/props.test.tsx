import React, { FC } from 'react';

import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import mapProps from './props';
import compose from './compose';

describe('Test @rb/core/hoc/props', () => {
  test('Props', () => {
    interface Base {
      data: string;
    }

    interface Props extends Base {
      test: string;
    }

    const TestComponent: FC<Props> = ({ data, test }) => (
      <div>
        {data}
        {test}
      </div>
    );

    const Container = mapProps(props => ({
      ...props,
      test: 'test',
    }) as Props);

    const Component: FC<Base> = Container(TestComponent);

    expect(Component.displayName).toEqual('TestComponent');

    const component = renderer.create(<Component data="data" />);

    const result = component.toJSON() as ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.props).toBeDefined();
    expect(JSON.stringify(result.props)).toEqual('{}');
    expect(result.children).toBeDefined();
    expect(JSON.stringify(result.children)).toEqual(JSON.stringify(['data', 'test']));
  });

  test('Props replace', () => {
    interface Base {
      data: string;
    }

    interface Props extends Base {
      test: string;
    }

    const TestComponent: FC<Base & Props> = ({ data, test }) => (
      <div>
        {data}
        {test}
      </div>
    );

    const Container = mapProps<Base, Props>(() => ({
      data: 'test data',
      test: 'test',
    }));

    const Component: FC<Base> = Container(TestComponent);

    expect(Component.displayName).toEqual('TestComponent');

    const component = renderer.create(<Component data="data" />);

    const result = component.toJSON() as ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.props).toBeDefined();
    expect(JSON.stringify(result.props)).toEqual('{}');
    expect(result.children).toBeDefined();
    expect(JSON.stringify(result.children)).toEqual(JSON.stringify(['test data', 'test']));
  });

  test('Props compose', () => {
    interface Base {
      data: string;
    }

    interface Props extends Base {
      test: string;
    }

    const TestComponent: FC<Base & Props> = ({ data, test }) => (
      <div>
        {data}
        {test}
      </div>
    );

    const Container1 = mapProps(props => ({
      ...props,
      test: 'test',
    }) as Props);

    const Container2 = mapProps(() => ({
      data: 'test data',
      test: 'test test',
    }));

    const Container = compose(Container1, Container2);

    const Component: FC<Base> = Container(TestComponent);

    expect(Component.displayName).toEqual('TestComponent');

    const component = renderer.create(<Component data="data" />);

    const result = component.toJSON() as ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.props).toBeDefined();
    expect(JSON.stringify(result.props)).toEqual('{}');
    expect(result.children).toBeDefined();
    expect(JSON.stringify(result.children)).toEqual(JSON.stringify(['test data', 'test test']));
  });
});
