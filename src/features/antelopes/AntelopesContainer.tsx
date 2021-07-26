import React, { useEffect } from "react";
import { Dimmer, Loader, Tab } from "semantic-ui-react";

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

  const panes = [
    {
      menuItem: "Table",
      render: () => (
        <Tab.Pane>
          <AntelopesTable antelopes={antelopes} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Charts",
      render: () => (
        <Tab.Pane>
          <AntelopesChart antelopes={antelopes} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div>
      {status === "loading" ? (
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      ) : (
        <React.Fragment>
          <Tab panes={panes} />
        </React.Fragment>
      )}
    </div>
  );
}
