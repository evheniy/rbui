import React, { FC } from 'react';

interface MapToProps<T, M> {
  (...items: T[]): M;
}

const wrapper = <P, W, T, M>(
  Wrapper: FC<W>,
  options: W,
  mapToProps: MapToProps<T, M> | undefined,
  Component: FC<P | (P & M)>,
) => {
  [].push();
  const Cmp: FC<P> = props => {
    if (mapToProps) {
      return (
        <Wrapper {...options} {...props}>
          {(...items: T[]) => <Component {...props as P} {...mapToProps(...items) as M} />}
        </Wrapper>
      );
    }

    return (
      <Wrapper {...options} {...props}>
        <Component {...props as P} />
      </Wrapper>
    );
  };

  Cmp.displayName = Wrapper.displayName || Wrapper.name || 'WrapperHOC';

  return Cmp;
};

const wrapperHOC = <P, W, T, M>(
  Wrapper?: FC<W | undefined>,
  options?: W,
  mapToProps?: MapToProps<T, M> | undefined,
  Component?: FC<P | (P & M)>,
) => {
  if (!Wrapper) {
    throw new Error('WrapperComponent should be set!');
  }

  return Component
    ? wrapper(Wrapper, options, mapToProps, Component)
    : (NewComponent?: FC<P>) => {
      if (!NewComponent) {
        throw new Error('Component should be set!');
      }

      return wrapper(Wrapper, options, mapToProps, NewComponent);
    };
};

export default wrapperHOC;
