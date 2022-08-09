import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number = 300): string => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced)
  
    return () => clearTimeout(handler)
  }, [value, delay])
  
  return debounced
};

export default useDebounce;
