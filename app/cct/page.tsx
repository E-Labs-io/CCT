/** @format */
"use client";

import "./styles/calculator.css";
import React, { useState } from "react";

import { Tabs, Tab } from "@nextui-org/tabs";

import RangeCalculator from "./components/calculator-range";
import SingleCalculator from "./components/calculator-single";

export default function Home() {
  return (
    <section>
      <div className="calculatorWrapper">
        <Tabs aria-label="CCT Calculator" variant="bordered">
          <Tab key="range" title="CCT Range">
            <RangeCalculator />
          </Tab>
          <Tab key="single" title="Single CCT">
            <SingleCalculator />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}
