import React from 'react';

import renderer from 'react-test-renderer';

import { HOC } from '@rbui/core/types';
import TestComponent from '@rbui/core/test-component';

import compose from '.';

describe('Test @rb/core/compose', () => {
  test('test compose', () => {
    const props = {
      isTest: true,
    };

    const messageA = 'A';

    const ContainerA: HOC = Component => p => (
      <div>
        {messageA}
        <Component {...p} />
      </div>
    );

    const messageB = 'B';
    const ContainerB: HOC = Component => p => (
      <div>
        {messageB}
        <Component {...p} />
      </div>
    );

    const Container = compose(ContainerA, ContainerB);

    const Component = Container(TestComponent);

    const result = renderer.create(<Component {...props} />).toJSON() as renderer.ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.children).toBeDefined();
    expect(result.children?.length).toEqual(2);

    const [testMessageA, containerAData] = result.children as renderer.ReactTestRendererJSON[];

    expect(testMessageA).toEqual(messageA);

    expect(containerAData).toBeDefined();
    expect(containerAData.type).toEqual('div');
    expect(containerAData.children).toBeDefined();
    expect(containerAData.children?.length).toEqual(2);

    const [testMessageB, containerBData] = containerAData.children as renderer.ReactTestRendererJSON[];

    expect(testMessageB).toEqual(messageB);

    expect(containerBData).toBeDefined();
    expect(containerBData.type).toEqual('div');
    expect(containerBData.children).toBeDefined();
    expect(containerBData.children?.length).toEqual(1);
    expect(containerBData.children?.[0]).toEqual(JSON.stringify(props));
  });

  test('test compose with 1 function', () => {
    const props = {
      isTest: true,
    };

    const message = 'Test';

    const ContainerTest: HOC = Component => p => (
      <div>
        {message}
        <Component {...p} />
      </div>
    );

    const Container = compose(ContainerTest);

    const Component = Container(TestComponent);

    const result = renderer.create(<Component {...props} />).toJSON() as renderer.ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.children).toBeDefined();
    expect(result.children?.length).toEqual(2);

    const [testMessage, containerTestData] = result.children as renderer.ReactTestRendererJSON[];

    expect(testMessage).toEqual(message);

    expect(containerTestData).toBeDefined();
    expect(containerTestData.type).toEqual('div');
    expect(containerTestData.children).toBeDefined();
    expect(containerTestData.children?.length).toEqual(1);
    expect(containerTestData.children?.[0]).toEqual(JSON.stringify(props));
  });

  test('test compose with 0 functions', () => {
    const props = {
      isTest: true,
    };
    const Container = compose();

    const Component = Container(TestComponent);

    const result = renderer.create(<Component {...props} />).toJSON() as renderer.ReactTestRendererJSON;

    expect(result).toBeDefined();
    expect(result.type).toEqual('div');
    expect(result.children).toBeDefined();
    expect(result.children?.length).toEqual(1);
    expect(result.children?.[0]).toEqual(JSON.stringify(props));
  });
});
