const initialState = {apple:1,pear:2};

export default (state=initialState, action) => {
  switch (action.type) {
    case "ADD_APPLE":
      state = Object.assign({}, state, action.payload);
      break;
    case "ADD_PEAR":
      state = Object.assign({}, state, action.payload);
      break;
  }
  return state;
};
