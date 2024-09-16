/** @format */

import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";

export type TemperatureData = {
  temp: number;
  dmx: number;
  percent: number;
  key: number;
};

export interface CCTTableProps {
  cctRange: TemperatureData[];
}

const headers = [
  { key: "temp", label: "CCT" },
  { key: "dmx", label: "DMX" },
  { key: "percent", label: "%" },
];

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

  const keyLabel = (label: "dmx" | "percent" | "temp") => {
    if (label === "dmx") return "";
    if (label === "percent") return "%";
    if (label === "temp") return "K";
  };

  return (
    <div className="calculatorTableArea">
      <Table
        removeWrapper
        aria-label="Example static collection table"
        selectionMode="single"
      >
        <TableHeader columns={headers}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        {cctRange ? (
          <TableBody items={cctRange}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>
                    {getKeyValue(item, columnKey)}
                    {keyLabel(columnKey!)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        ) : (
          <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
        )}
      </Table>
    </div>
  );
}
