import { useCallback, useRef } from 'react';


export const useDebounce = (delay = 1000) => {
  const timeoutId = useRef<NodeJS.Timeout>();
  const isFirstTime = useRef(true);

  const debounce = useCallback((func:() => void) => {

    if(isFirstTime.current) {
      isFirstTime.current = false;
      func();
    } else {

      if(timeoutId.current) {
        clearTimeout(timeoutId.current);
      }   
      timeoutId.current = setTimeout(() => func() , delay);
    }
  }, [delay]);

  return { debounce };
};