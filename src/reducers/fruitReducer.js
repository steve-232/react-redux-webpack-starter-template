const initialState = { apple: 1, pear: 2 };

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APPLE":
      return { ...state, ...action.payload };
    case "ADD_PEAR":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
