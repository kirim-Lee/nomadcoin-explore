export const makeDate = (seconds: number): string => {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toUTCString();
};

export const stringJSON = str => {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const parseMessage = (message: any): any => {
  const { data } = message;
  if (typeof data === "string") {
    const parsed = stringJSON(data);
    if (parsed) {
      const { type } = parsed;
      if (type === "BLOCKCHAIN_RESPONSE") {
        return parsed.data;
      }
    }
  }
  return null;
};
