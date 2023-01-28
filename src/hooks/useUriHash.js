import { useEffect, useState } from "react";

export function useUriHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const listener = (event) => {
      setHash(window.location.hash)
    };
    window.addEventListener('hashchange', listener);

    return () => {
      window.removeEentListener('hashchange', listener);
    };
  }, []);

  return hash;
}
