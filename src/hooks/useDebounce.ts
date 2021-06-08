import { useRef } from 'react';

function useDebounce(fn: any, delay: number) {
  const timeoutRef = useRef(0);

  function debouncedFn(...params: any) {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      fn(...params);
    }, delay);
  }

  return debouncedFn;
}

export default useDebounce;
