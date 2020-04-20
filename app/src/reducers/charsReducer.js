import {
  FETCH_CHARS_START,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_FAILURE,
} from "../actions";

const initialState = {
  chars: null,
  isFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CHARS_SUCCESS:
      return {
        ...state,
        chars: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_CHARS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
