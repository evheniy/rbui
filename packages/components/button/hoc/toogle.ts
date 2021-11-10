import {
  MouseEvent,
} from 'react';

import hocBuilder from '@rbui/core/hoc/hooks';
import useToggle from '@rbui/core/use-toggle';

export interface P {
  active: boolean;
  onClick?: (event: MouseEvent) => void;
}

export interface H {
  active: boolean;
  onClick: (event: MouseEvent) => void;
}

const toggleHoc = hocBuilder<P, H>(props => {
  const [active, setActive] = useToggle(props.active);

  const onClick = (event: MouseEvent) => {
    setActive();
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return { active, onClick };
}, { displayName: 'ToggleHOC' });

export default toggleHoc;
