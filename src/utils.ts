export const makeDate = (seconds: number): string => {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toUTCString();
};
