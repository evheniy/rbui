import useToggle from '@rbui/core/use-toggle';

import { Action as A } from '../../types';

const action: A = props => {
  const [active, toggleActive] = useToggle(props.active);

  const onClick: typeof props.onClick = event => {
    if (props.toggle) {
      toggleActive();
    }

    if (props.onClick) {
      props.onClick(event);
    }
  };

  return { active, onClick };
};

export default action;
