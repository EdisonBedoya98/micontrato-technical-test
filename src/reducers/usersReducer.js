import { LOADING, ERROR, GET_USERS,SET_PAGES_NUMBER } from "../types/usersTypes";

const INITIAL_STATE = {
  users: [],
  totalPages: 0,
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload, loading: false, error: ""};
    case SET_PAGES_NUMBER:
      return {...state,totalPages:action.payload}
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
