/** @format */

import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

export type TemperatureData = {
  temp: number;
  dmx: number;
  percent: number;
};

export interface CCTTableProps {
  cctRange: TemperatureData[];
}

export default function CCTTable({ cctRange }: CCTTableProps) {
  const tableRow = (data: TemperatureData, index: Number) => {
    return (
      <TableRow key={`${index}`}>
        <TableCell>{data.temp}K</TableCell>
        <TableCell>{data.dmx}</TableCell>
        <TableCell>{data.percent}%</TableCell>
      </TableRow>
    );
  };

  return (
    <div className="calculatorTableArea">
      <Table removeWrapper aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>CCT</TableColumn>
          <TableColumn>DMX</TableColumn>
          <TableColumn>%</TableColumn>
        </TableHeader>
        <TableBody>
          {cctRange && cctRange.map((item, key) => tableRow(item, key))}
        </TableBody>
      </Table>
    </div>
  );
}
