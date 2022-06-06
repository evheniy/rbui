import compose from './compose';

describe('@rbui/core/props/compose', () => {
  test('test without props', () => {
    const composed = compose();

    const result = composed({ test: true });

    expect(result).toEqual({ test: true });
  });

  test('test with 1 props', () => {
    type Props = { test: boolean };

    const mapProps = (props: Props) => ({ mapped: true, ...props });

    const composed = compose(mapProps);

    const result = composed({ test: true }) as ReturnType<typeof mapProps>;

    expect(result).toEqual({ mapped: true, test: true });
  });

  test('test with 2 props', () => {
    type Props = { test: boolean };

    const mapProps1 = (props: Props) => ({ mapped1: true, ...props });
    const mapProps2 = (props: Props) => ({ mapped2: true, ...props });

    const composed = compose(mapProps1, mapProps2);

    const result = composed({ test: true }) as Props & ReturnType<typeof mapProps1> & ReturnType<typeof mapProps2>;

    expect(result).toEqual({ mapped1: true, mapped2: true, test: true });
  });
});
