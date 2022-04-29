export interface Modifier {
  title: string;
  fixedAmount: number;
  percentageAmount: number;
  type?: 'addition' | 'subtraction';
}
