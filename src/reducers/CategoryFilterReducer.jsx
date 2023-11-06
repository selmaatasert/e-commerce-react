export function categoryFilterReducer(state, action) {
  switch (action.type) {
    case "men": {
      const encoded = encodeURIComponent("men's clothing");
      return { ...state, filter: encoded };
    }
    case "women": {
      const encoded = encodeURIComponent("women's clothing");
      return { ...state, filter: encoded };
    }
    case "electronics": {
      return { ...state, filter: "electronics" };
    }
    case "jewelery": {
      return { ...state, filter: "jewelery" };
    }
    default: {
      return { ...state, filter: "" };
    }
  }
}
