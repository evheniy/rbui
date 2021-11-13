import React, { FC } from 'react';

import renderer from 'react-test-renderer';

import toggleHoc from './toogle';

import { BaseProps } from '../types';

describe('Test @rb/core/button/containers/toggle.ts', () => {
  const TestComponent: FC<BaseProps> = props => <div>{JSON.stringify(props)}</div>;

  test('test toggle hoc', () => {
    const Component = toggleHoc(TestComponent);
    const component = renderer.create(<Component active={false} />);

    const result = component.toJSON() as renderer.ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.children).toBeDefined();
    expect(result.children?.length).toEqual(1);
    expect(result.children?.[0]).toEqual('{"active":false}');
  });
});
