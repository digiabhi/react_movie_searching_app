function useDebounce(callback, delay = 1000) {
  // It takes a callback and returns a modified callback, that executes after a delay
  let timerId;
  return (...args) => {
    clearTimeout(timerId); // If there is any other old timer going on, remove it
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export default useDebounce;
