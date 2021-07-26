import { antelopesMock } from "./antelopesMock";
import { Antelope } from "./constants";

export const fetch = () => {
  return new Promise<{ data: Antelope[] }>((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: antelopesMock,
        }),
      300
    );
  });
};
