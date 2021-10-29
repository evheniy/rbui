import React from 'react';

import renderer from 'react-test-renderer';

import TestComponent from '@rbui/core/test-component';

import toggleHoc from './toogle';

describe('Test @rb/core/button/containers/toggle.ts', () => {
  test('test toggle hoc', () => {
    const Component = toggleHoc(TestComponent);
    const component = renderer.create(<Component />);

    const result = component.toJSON() as renderer.ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.children).toBeDefined();
    expect(result.children?.length).toEqual(1);
    expect(result.children?.[0]).toEqual('{"active":false}');
  });
});
