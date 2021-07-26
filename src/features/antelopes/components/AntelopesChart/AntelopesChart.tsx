import React, { useMemo, useState } from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import { Menu } from "semantic-ui-react";

import { Antelope } from "../../constants";
import { getPieData } from "../../utils";
import "./AntelopesChart.css";

type Props = {
  antelopes: Antelope[];
};

export default function AntelopesChart({ antelopes }: Props) {
  const [dataToCompare, setDataToCompare] = useState<"horns" | "continent">(
    "horns"
  );

  const pieData = useMemo(
    () => getPieData(dataToCompare, antelopes),
    [dataToCompare]
  );
  return (
    <div className="antelopes-chart-container">
      <h2>Antelopes chart</h2>

      <Menu>
        <Menu.Item
          name="horns"
          active={dataToCompare === "horns"}
          onClick={() => setDataToCompare("horns")}
        >
          Compare horns
        </Menu.Item>
        <Menu.Item
          name="continents"
          active={dataToCompare === "continent"}
          onClick={() => setDataToCompare("continent")}
        >
          Compare continents
        </Menu.Item>
      </Menu>
      <h3 className="chart-data-info">{dataToCompare}</h3>
      <PieChart width={800} height={800} className="antelopes-chart">
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={pieData}
          outerRadius={300}
          fill="orangered"
          label
        />

        <Tooltip />
      </PieChart>
    </div>
  );
}
