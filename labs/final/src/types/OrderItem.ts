/// An Item in the order or cart. One thing ordered
/// by a diner.
export type OrderItem = {
  cartItemId: number,
  itemId: number,
  price: number,
  firstName?: string,  // Diner's name
  notes?: string,  // Special instructions
}