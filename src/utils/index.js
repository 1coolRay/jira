import { useState, useEffect } from "react";
export const isFalsy = (value) => (value === 0 ? false : !value);
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};
export const useDebounce = (value, delay) => {
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
