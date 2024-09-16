/** @format */

import { TemperatureData } from "../components/cctTable";

export interface colourTemperatureCalculator {
  min: number;
  max: number;
  bits: boolean;
  interval: number;
  single?: true;
}

export default function colourTemperatureCalculator({
  min,
  max,
  bits,
  interval,
  single,
}: colourTemperatureCalculator): TemperatureData[] {
  const data: TemperatureData[] = [];
  const bitParts = bits ? 65536 : 255;
  const kPerBit = (max - min) / bitParts;

  let key = 0;

  if (single)
    return [
      {
        temp: interval,
        dmx: Number(((interval - min) / kPerBit).toFixed(3)),
        percent: Number((((interval - min) / (max - min)) * 100).toFixed(3)),
        key,
      },
    ];
  else
    for (let i = min; i <= max; i += interval) {
      const line = {
        temp: i,
        dmx: Number(((i - min) / kPerBit).toFixed(3)),
        percent: Number((((i - min) / (max - min)) * 100).toFixed(3)),
        key,
      };

      data.push(line);
      key++;
    }

  return data;
}
