import { Antelope } from "./constants";

export const getPieData = (
  dataToCompare: "horns" | "continent",
  antelopes: Antelope[]
) => {
  const aggregate = antelopes.reduce((acc, curr) => {
    const data = curr[dataToCompare];
    return {
      ...acc,
      [data]: (acc[data] || 0) + 1,
    };
  }, {} as any);
  return Object.keys(aggregate).map((key) => ({
    name: key,
    value: aggregate[key],
  }));
};
