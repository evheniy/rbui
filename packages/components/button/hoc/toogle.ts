import {
  MouseEvent,
} from 'react';

import hocBuilder from '@rbui/core/hoc-builder';
import useToggle from '@rbui/core/use-toggle';

const toggleHoc = hocBuilder(props => {
  const [active, setActive] = useToggle(props.active);

  const onClick = (event: MouseEvent) => {
    setActive();
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return { active, onClick };
}, 'ToggleHOC');

export default toggleHoc;
