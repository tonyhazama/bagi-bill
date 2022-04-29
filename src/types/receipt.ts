import { Modifier } from './modifier';
import { ReceiptItem } from './receipt-item';

export default interface Receipt {
  id: string;
  receiptNo: string;
  date: string;
  time: string;
  items: ReceiptItem[];
  tax?: Modifier[];
  addition?: Modifier[];
  discount?: Modifier[];
  totalAmount?: number;
  change?: number;
  paymentMethod?: 'cash' | 'credit' | 'debit';
}
