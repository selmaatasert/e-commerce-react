export function addToCartReducer(state, action) {

  if (action.type === "increment") {

    const index = state.findIndex(({ id }) => id === action.id);

    state[index].count++;

    return [].concat(state);

  } else if (action.type === "decrement") {

    const index = state.findIndex(({ id }) => id === action.id);
   
    if (state[index].count < 2) {

      state.splice(index, 1)

      return [].concat(state)

    } else {

      state[index].count --
      return [].concat(state);
    }

  } else if (action.type === "add") {
    const newItem = {
      id: action.id,
      count: action.count,
      product: action.product,
    };
    const newArr = state.slice();
    const index = newArr.findIndex((item)=> item.id === action.id  )
    if (index === -1)  {
      newArr.push(newItem);

    } else {
      newArr[index].count += action.count ;
      if (newArr[index].count >10) {
        newArr[index].count = 10;
      }
    }
    return newArr;
  } else if (action.type === "reset") {
    return [];
  } else console.log("this action is not supported");
}
