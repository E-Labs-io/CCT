/** @format */

export type FixtureList = {
  name: string;
  min: number;
  max: number;
  bits: boolean;
};

export const fixtureList: FixtureList[] = [
  {
    name: "SkyPanel",
    min: 2800,
    max: 10000,
    bits: true,
  },
  {
    name: "Astera Titan/AX",
    min: 1700,
    max: 10000,
    bits: false,
  },
  {
    name: "Vortex V4/8",
    min: 2200,
    max: 15000,
    bits: true,
  },
  {
    name: "Nanlux Evoke 1200B",
    min: 2700,
    max: 6500,
    bits: true,
  },
  {
    name: "Nanlux Dyno 1200C",
    min: 2700,
    max: 20000,
    bits: false,
  },
  {
    name: "Litemat Spectrum",
    min: 1800,
    max: 10000,
    bits: false,
  },
  {
    name: "DMG Dash",
    min: 1600,
    max: 10000,
    bits: false,
  },
];
