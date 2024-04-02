export interface NumberLookupMapStructure {
  [key: string]: {
    numerator: number;
    denominator: number;
    fraction: string;
    metric: number;
  };
}

export interface ToFractionOptions {
  useUnicodeVulgar?: boolean;
}
