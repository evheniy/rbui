/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON, act } from 'react-test-renderer';

import { useToggle } from '.';

interface Props {
  isToggled?: boolean;
}

const TestComponent: FC<Props> = ({ isToggled = false }) => {
  const [isTextChanged, setIsTextChanged] = useToggle(isToggled);

  return (
    <button type="button" onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
  );
};

const testProps = (button: ReactTestRendererJSON, toggled: boolean): void => {
  expect(button).toBeDefined();

  expect(button.type).toEqual('button');
  expect(button.props.type).toEqual('button');
  expect(button.props.onClick).toBeDefined();
  expect(button.children).toBeDefined();
  expect(button.children?.length).toEqual(1);

  if (toggled) {
    expect(button.children?.[0]).toEqual('Toggled');
  } else {
    expect(button.children?.[0]).toEqual('Click to Toggle');
  }
};

const useToggleTest = (component: ReactTestRenderer, isToggled = false): void => {
  const button = component.toJSON() as renderer.ReactTestRendererJSON;

  testProps(button, isToggled);

  act(() => {
    button.props.onClick();
  });

  testProps(component.toJSON() as renderer.ReactTestRendererJSON, !isToggled);
};

describe('Test @rb/core/use-toggle', () => {
  test('test useToggle hook initialState:true', () => {
    const isToggled = true;
    useToggleTest(renderer.create(<TestComponent isToggled={isToggled} />), isToggled);
  });

  test('test useToggle hook initialState:false', () => {
    const isToggled = false;
    useToggleTest(renderer.create(<TestComponent isToggled={isToggled} />), isToggled);
  });

  test('test useToggle hook initialState:undefined', () => {
    useToggleTest(renderer.create(<TestComponent />));
  });
});
