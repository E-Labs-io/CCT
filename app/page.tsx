/** @format */
"use client";

import "../styles/calculator.css";
import React, { useState } from "react";

import colourTemperatureCalculator from "../helpers/rangeCalculator";

import RangeInput from "../components/rangeInput";
import CCTTable, { TemperatureData } from "../components/cctTable";

export default function Home() {
  const [tableData, setTableData] = useState<TemperatureData[]>([]);

  const onCalculate = (
    min: number,
    max: number,
    bits: boolean,
    interval: number
  ) =>
    setTableData(
      colourTemperatureCalculator({
        min,
        max,
        bits,
        interval,
      })
    );

  return (
    <section>
      <div className="calculatorWrapper">
        <div className="calculatorContainer">
          <RangeInput onCalculate={onCalculate} />
          <CCTTable cctRange={tableData} />
        </div>
      </div>
    </section>
  );
}
