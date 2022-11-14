export const getItemCount = (cartItems) =>
  cartItems.reduce((count, cartItem) => cartItem.quantity + count, 0);

export const getSubTotal = (cartItems) => {
  cartItems.reduce(
    (sum, { product, quantity }) => product.price * quanity + sum,
    0
  );
};
