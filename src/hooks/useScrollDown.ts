export const useScrollDown = () => {
  const windowSize = window.innerWidth;
  return window.scrollTo(
    windowSize < 766
      ? {
          top: 750,
          behavior: "smooth",
        }
      : {
          top: 1000,
          behavior: "smooth",
        }
  );
};
