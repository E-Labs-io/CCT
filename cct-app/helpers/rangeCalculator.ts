/** @format */

import { TemperatureData } from "@/components/cctTable";

export interface colourTemperatureCalculator {
  min: number;
  max: number;
  bits: boolean;
  interval: number;
}

export default function colourTemperatureCalculator({
  min,
  max,
  bits,
  interval,
}: colourTemperatureCalculator): TemperatureData[] {
  const data: TemperatureData[] = [];
  const bitParts = bits ? 65536 : 255;
  const kPerBit = (max - min) / bitParts;

  for (let i = min; i <= max; i += interval) {
    const line = {
      temp: i,
      dmx: (i - min) / kPerBit,
      percent: ((i - min) / (max - min)) * 100,
    };
    data.push(line);
  }

  return data;
}
