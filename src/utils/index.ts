import { useState, useEffect } from "react";
export const isFalsy = (value: any) => (value === 0 ? false : !value);
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};
export const useDebounce = (value: any, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState();
  useEffect(() => {
    //每次在value或delay发生变化时，设置一个定时器
    let timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    //当上一个useEffect处理完之后会执行下面的回调，此时清楚上次的定时器
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
