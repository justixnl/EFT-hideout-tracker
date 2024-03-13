export const debounce = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  // This returns a new function that, when called, 
  // delays the execution of func. If debounce is called again before the delay period expires,
  // it cancels the previous executing of func and sets a new one. 
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
};