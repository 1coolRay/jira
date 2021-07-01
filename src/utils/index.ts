import { useState, useEffect, useRef } from "react";
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";
//去假值
export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};
// 页面首次加载
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
// Debounce
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
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
// 根据页面切换浏览器标签title
export const useDocumentTitle = (
  title: string,
  keepOnUnmount: boolean = true
) => {
  // 页面加载时，使用useRef将最开始的title保存
  const oldTitle = useRef(document.title).current 
  // 调用时将传入的title设置为浏览器title 
  useEffect(()=>{
    document.title = title
  },[title])
  //卸载时判断是否需要还原为最初的title
  useEffect(()=>{
    return ()=>{
      if(!keepOnUnmount){
        document.title = oldTitle
      }
    }
  },[keepOnUnmount,oldTitle])
};
