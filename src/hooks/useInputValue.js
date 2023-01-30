import { useState } from 'react';

export function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);
  const onChange = (ev) => {
    setValue(ev.target.value);
  };
  return {
    value,
    onChange
  };
}
