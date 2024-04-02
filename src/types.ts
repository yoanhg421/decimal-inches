export interface NumberLookupMapStructure {
  [key: string]: {
    numerator: number;
    denominator: number;
    fraction: string;
  };
}

export interface ToFractionOptions {
  useUnicodeVulgar?: boolean;
}
