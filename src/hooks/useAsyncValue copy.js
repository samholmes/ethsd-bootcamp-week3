import * as React from 'react';
import { useAsyncEffect } from './useAsyncEffect';

export function useAsyncValue(effect, deps) {
  const [value, setValue] = React.useState(undefined);
  const [error, setError] = React.useState(undefined);

  let cancel = false;
  useAsyncEffect(async () => {
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
  }, deps);

  return [value, error];
}
