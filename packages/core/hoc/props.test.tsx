import React, { FC } from 'react';

import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import withProps from './props';
import compose from './compose';

describe('Test @rb/core/hoc/props', () => {
  test('Props', () => {
    interface Base {
      data: string;
    }

    interface Props {
      test: string;
    }

    const TestComponent: FC<Base & Props> = ({ data, test }) => (
      <div>
        {data}
        {test}
      </div>
    );

    const Container = withProps<Base, Props>({
      test: 'test',
    }, { displayName: 'TEST' });

    const Component: FC<Base> = Container(TestComponent as FC<Base>);

    expect(Component.displayName).toEqual('TEST');

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

    interface Props {
      test: string;
    }

    const TestComponent: FC<Base & Props> = ({ data, test }) => (
      <div>
        {data}
        {test}
      </div>
    );

    const Container = withProps<Base, Props>(() => ({
      data: 'test data',
      test: 'test',
    }), { displayName: 'TEST' });

    const Component: FC<Base> = Container(TestComponent as FC<Base>);

    expect(Component.displayName).toEqual('TEST');

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

    interface Props {
      test: string;
    }

    const TestComponent: FC<Base & Props> = ({ data, test }) => (
      <div>
        {data}
        {test}
      </div>
    );

    const Container1 = withProps<Base, Props>({
      test: 'test',
    }, { displayName: 'TEST' });

    const Container2 = withProps<Base, Props>(() => ({
      data: 'test data',
      test: 'test test',
    }), { displayName: 'TEST' });

    const Container = compose(Container1, Container2);

    const Component: FC<Base> = Container(TestComponent as FC<Base>);

    expect(Component.displayName).toEqual('TEST');

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
