/** @format */
"use client";

import "../styles/calculator.css";
import React, { useState } from "react";

import colourTemperatureCalculator from "../helpers/rangeCalculator";
import RangeInput from "./input-range";
import CCTTable, { TemperatureData } from "./table";

export default function RangeCalculator() {
  const [tableData, setTableData] = useState<TemperatureData[]>([]);

  const onCalculate = (
    min: number,
    max: number,
    bits: boolean,
    interval: number,
    single?: true
  ) =>
    setTableData(
      colourTemperatureCalculator({
        min,
        max,
        bits,
        interval,
        single,
      })
    );

  return (
    <div className="calculatorContainer">
      <RangeInput onCalculate={onCalculate} />
      <CCTTable cctRange={tableData} />
    </div>
  );
}
