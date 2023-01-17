const counterRdeucer = (state = 0, action: { type: any }) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state + 1;
    default:
      return state;
  }
};

export default counterRdeucer;
