// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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