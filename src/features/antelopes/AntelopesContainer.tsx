import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { antelopesThunkActions, selectAntelopes } from "./antelopesSlice";

export default function AntelopesContainer() {
  const dispatch = useAppDispatch();
  const { antelopes, status } = useAppSelector(selectAntelopes);

  useEffect(() => {
    dispatch(antelopesThunkActions.fetch());
  }, [dispatch]);

  console.log({ antelopes, status });
  return <div></div>;
}
