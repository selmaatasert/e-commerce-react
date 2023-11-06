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
      if (state.count > 0) {
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
        count: 0,
      };
    }
    default: {
      return state;
    }
  }
}
