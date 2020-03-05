const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_APARTMENTS':
      return { ...state, loading: true}
    case 'FETCH_APARTMENTS':
      return { ...state, apartments: action.json, loading: false }
    default:
      return state;
  }
};

export default reducer;
