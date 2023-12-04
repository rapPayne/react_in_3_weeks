import { CreditCard } from "./CreditCard";
import { OrderItem } from "./OrderItem";

/**
 * 
 */
export type Order = {
  id: number,
  creditCard: CreditCard,
  items: OrderItem[],
  area: string,
  location: string,
  orderTime: Date,
  pickupTime: Date,
  tax: number,
  tip: number,
  userId: number,
}