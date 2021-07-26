import React, { useEffect } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { antelopesThunkActions, selectAntelopes } from "./antelopesSlice";
import AntelopesTable from "./components/AntelopesTable/AntelopesTable";

export default function AntelopesContainer() {
  const dispatch = useAppDispatch();
  const { antelopes, status } = useAppSelector(selectAntelopes);

  useEffect(() => {
    dispatch(antelopesThunkActions.fetch());
  }, [dispatch]);

  return (
    <div>
      {status === "loading" ? (
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      ) : (
        <AntelopesTable antelopes={antelopes} />
      )}
    </div>
  );
}
