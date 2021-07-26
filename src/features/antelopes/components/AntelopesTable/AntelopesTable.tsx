import React from "react";
import { Image, Table } from "semantic-ui-react";

import { Antelope } from "../../constants";
import "./AntelopesTable.css";

type Props = {
  antelopes: Antelope[];
};

export default function AntelopesTable({ antelopes }: Props) {
  return (
    <div className="antelopes-table">
      <h2>Antelopes table</h2>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Continent</Table.HeaderCell>
            <Table.HeaderCell>Weigth</Table.HeaderCell>
            <Table.HeaderCell>Heigth</Table.HeaderCell>
            <Table.HeaderCell>Horns</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {antelopes.map((antelope) => (
            <Table.Row key={antelope.name}>
              <Table.Cell>
                <Image src={antelope.picture} size="small" />
              </Table.Cell>
              <Table.Cell>{antelope.name}</Table.Cell>
              <Table.Cell>{antelope.continent}</Table.Cell>
              <Table.Cell>{antelope.weight}</Table.Cell>
              <Table.Cell>{antelope.height}</Table.Cell>
              <Table.Cell>{antelope.horns}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
