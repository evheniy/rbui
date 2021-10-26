import { useCallback, useState } from 'react';

interface UseToggle {
  (initialState?: boolean | undefined): [boolean, () => void];
}

const useToggle: UseToggle = (initialState = false) => {
  const [isToggled, setState] = useState<boolean>(initialState);

  const toggle = useCallback((): void => setState(prevState => !prevState), []);

  return [isToggled, toggle];
};

export default useToggle;
