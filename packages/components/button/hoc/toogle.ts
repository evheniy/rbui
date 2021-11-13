import {
  MouseEvent,
} from 'react';

import mapProps from '@rbui/core/hoc/props';
import useToggle from '@rbui/core/use-toggle';

import { BaseProps } from '../types';

export interface P {
  active?: boolean;
  onClick?: (event: MouseEvent) => void;
}

const toggleHoc = mapProps<P, BaseProps>(props => {
  const [active, setActive] = useToggle(props.active);

  const onClick = (event: MouseEvent) => {
    setActive();
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return { ...props, active, onClick };
});

export default toggleHoc;
