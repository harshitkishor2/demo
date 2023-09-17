import { useEffect, useState } from 'react'

// export function useDebounce<T>(value: T, delay?: number): T {
//   const [debouncedValue, setDebouncedValue] = useState<T>(value)

//   useEffect(() => {
//     const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

//     return () => {
//       clearTimeout(timer)
//     }
//   }, [value, delay])

//   return debouncedValue
// }

const useDebounce = (value: any, milliSeconds?: number): any => {
    const [debouncedValue, setDebouncedValue] = useState<any>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), milliSeconds || 500);

        return () => {
            clearTimeout(timer);
        };
    }, [value, milliSeconds]);

    return debouncedValue;
};

export default useDebounce


/* 

const debouncedValue = useDebounce(value, 500)


  // Fetch API (optional)
  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [debouncedValue])

*/