import React, { useEffect } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { antelopesThunkActions, selectAntelopes } from "./antelopesSlice";
import AntelopesChart from "./components/AntelopesChart/AntelopesChart";
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
        <React.Fragment>
          <AntelopesTable antelopes={antelopes} />
          <AntelopesChart antelopes={antelopes} />
        </React.Fragment>
      )}
    </div>
  );
}
