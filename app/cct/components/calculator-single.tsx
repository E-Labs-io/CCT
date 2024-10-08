/** @format */
"use client";

import "../styles/calculator.css";
import React, { useState } from "react";

import colourTemperatureCalculator from "../helpers/rangeCalculator";
import CCTTable, { TemperatureData } from "./table";

import SingleInput from "@/app/cct/components/input-single";

export default function SingleCalculator() {
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
      <SingleInput onCalculate={onCalculate} />
      <CCTTable cctRange={tableData} />
    </div>
  );
}
