export function cartCounterReducer(state, action) {
  switch (action.type) {
    case "increment": {
      let newCount = state.count;
      if (state.count < 10) {
        newCount++;
      }
      return {
        ...state,
        count: newCount,
      };
    }
    case "decrement": {
      let newCount = state.count;
      if (state.count > 1) {
        newCount--;
      }
      return {
        ...state,
        count: newCount,
      };
    }
    case "reset": {
      return {
        ...state,
        count: 1,
      };
    }
    default: {
      return state;
    }
  }
}
