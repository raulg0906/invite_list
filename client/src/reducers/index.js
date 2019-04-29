const initialState = {
  current: {},
  going: [],
  notgoing: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_RANDOM_USER":
      return { ...state, current: action.payload };
    case "GET_GOING":
      return { ...state, going: action.payload };
    case "GET_NOT_GOING":
      return { ...state, notgoing: action.payload };
    default:
      return state;
  }
}
