/** @format */

import React, { useState } from "react";
import "../styles/calculator.css";
import { Switch } from "@nextui-org/switch";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";

import { fixtureList } from "@/constants/fixtures";

export interface SingleInputProps {
  onCalculate: (
    min: number,
    max: number,
    bits: boolean,
    interval: number,
    single?: true
  ) => void;
}

export default function SingleInput({ onCalculate }: SingleInputProps) {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(20000);
  const [bit, setBit] = useState<boolean>(false);
  const [interval, setInterval] = useState<number>(200);

  const updateState = (type: 1 | 2 | 3 | 4, data: number | boolean) => {
    switch (type) {
      case 1: {
        //set min
        setMin(Number(data));
        return;
      }
      case 2: {
        //set max
        setMax(Number(data));
        return;
      }
      case 3: {
        //set bit
        setBit(data as boolean);
        return;
      }
      case 4: {
        //set interval
        setInterval(Number(data));
        return;
      }
    }
  };

  const onFixtureSelect = (key: any) => {
    const fixture = fixtureList[key.currentKey];

    updateState(3, fixture.bits);
    updateState(1, fixture.min);
    updateState(2, fixture.max);
  };

  return (
    <div className="calculatorInputArea">
      <div className="calculatorInputLine">
        <Select label="Fixtures" onSelectionChange={onFixtureSelect}>
          {fixtureList.map((fixture, key) => (
            <SelectItem key={key}>{fixture.name}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="calculatorInputLine">
        <div className="calculatorInputLabel">Min</div>
        <div className="calculatorInputInput">
          <Input
            type="number"
            value={min.toString()}
            variant="bordered"
            onValueChange={(data: string) => updateState(1, Number(data))}
          />
          K
        </div>
      </div>
      <div className="calculatorInputLine">
        <div className="calculatorInputLabel">Max</div>
        <div className="calculatorInputInput">
          <Input
            type="number"
            value={max.toString()}
            variant="bordered"
            onValueChange={(data: string) => updateState(2, Number(data))}
          />
          K
        </div>
      </div>
      <div className="calculatorInputLine">
        <div className="calculatorInputLabel">Bits</div>
        <div className="calculatorInputInput">
          8
          <Switch
            isSelected={bit}
            onValueChange={(flag: boolean) => updateState(3, flag)}
          />
          16
        </div>
      </div>
      <div className="calculatorInputLine">
        <div className="calculatorInputLabel">Target</div>
        <div className="calculatorInputInput">
          <Input
            type="number"
            value={interval.toString()}
            variant="bordered"
            onValueChange={(data: string) => updateState(4, Number(data))}
          />
          K
        </div>
      </div>
      <Button onClick={() => onCalculate(min, max, bit, interval, true)}>
        Calculate
      </Button>
    </div>
  );
}
