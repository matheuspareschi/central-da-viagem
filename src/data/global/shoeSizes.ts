export interface ShoeSizeConversion {
  br: number;
  us: string;
}

export const womenShoeSizes: ShoeSizeConversion[] = [
  { br: 33, us: "4½" },
  { br: 34, us: "5½" },
  { br: 35, us: "6" },
  { br: 36, us: "7" },
  { br: 37, us: "7½" },
  { br: 38, us: "8" },
  { br: 39, us: "9" },
  { br: 40, us: "10" },
];

export const menShoeSizes: ShoeSizeConversion[] = [
  { br: 37, us: "6½" },
  { br: 38, us: "7" },
  { br: 39, us: "7½" },
  { br: 40, us: "8½" },
  { br: 41, us: "9½" },
  { br: 42, us: "10" },
  { br: 43, us: "11" },
  { br: 44, us: "12" },
  { br: 45, us: "12½" },
];
