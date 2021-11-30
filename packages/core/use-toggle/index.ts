import { useCallback, useState } from 'react';

interface UseToggle {
  (initialState?: boolean): [boolean, () => void];
}

/**
 * Toggle hook
 * @param {boolean} initialState
 * @returns {[boolean, () => void]}
 */
const useToggle: UseToggle = (initialState = false) => {
  const [isToggled, setState] = useState(initialState);

  const toggle = useCallback((): void => setState(prevState => !prevState), []);

  return [isToggled, toggle];
};

export default useToggle;
