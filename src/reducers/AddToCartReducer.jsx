export function addToCartReducer(state, action) {
  if (action.type === "increment") {


    const cartItem = state.find(({ id }) => id === action.id);
    const newArr = state.filter((cartItem) => cartItem.id !== action.id);
    console.log(newArr);
    cartItem.count = cartItem.count + 1;
    newArr.push(cartItem);
    return newArr;
  } else if (action.type === "decrement") {


    const cartItem = state.find(({ id }) => id === action.id);
    let newArr = state.filter((cartItem) => cartItem.id !== action.id);
    cartItem.count = cartItem.count - 1;
    if (cartItem.count < 1) {
      return newArr;
    } else {
      newArr.push(cartItem);
      return newArr;
    }
  } else if (action.type === "add") {

    const newItem = { id: action.id, count: action.count, product: action.product };
    const newArr = state.slice();
    newArr.push(newItem);
    return newArr;
  } else if (action.type === "reset") {

    return [];
  } else console.log("this action is not supported");
}
