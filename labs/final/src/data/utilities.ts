import { CartItem } from "../types/CartItem";
import { OrderItem } from "../types/OrderItem";
import { Order as OrderType } from '../types/Order';

const taxRate = 0.0825;

export const getOrderTotal = (order: OrderType): string =>
  toCurrency(order.tax
    + order.tip
    + order.items.reduce((prev: number, curr: OrderItem) => prev + curr.price, 0)
  );

export const getNumberOfDiners = (order: OrderType): number => {
  const diners: string[] = [];
  let totalDiners: number = 0;
  order.items?.forEach((i) => diners.includes(i.firstName ?? "no name") || totalDiners++);
  return totalDiners;
}

export const toCurrency = (cost: number): string =>
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    .format(cost)

export const getCartTotal = (cart: Array<CartItem>): number =>
  cart.reduce((prev: number, curr: CartItem) => prev + curr.price, 0)

export const calculateTax = (cost: number): number => cost * taxRate;

export const getNextCartItemId = (cart: Array<CartItem>) =>
  cart.reduce((prev: number, curr) => (prev > curr.id) ? prev : curr.id, 0) + 1;
