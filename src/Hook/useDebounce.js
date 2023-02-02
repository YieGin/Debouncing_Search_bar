import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [denounceTest, setDenounceTest] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDenounceTest(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return denounceTest;
};

export default useDebounce;
