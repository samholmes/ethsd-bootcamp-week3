import * as React from 'react';

export function useAsyncValue(effect, deps) {
  const [value, setValue] = React.useState(undefined);
  const [error, setError] = React.useState(undefined);

  let cancel = false;
  React.useEffect(() => {
    const cb = async () => {
      try {
        const value = await effect();
        if (cancel) return;
        setValue(value);
        setError(undefined);
      } catch (error) {
        if (cancel) return;
        setValue(undefined);
        setError(error);
      }
      return () => {
        cancel = true;
      };
    };

    cb();

    return () => {
      cancel = true
    }
  }, deps);

  return [value, error];
}
