export const FETCH_CHARS_START = "FETCH_CHARS_START";
export const FETCH_CHARS_SUCCESS = "FETCH_CHARS_SUCCESS";
export const FETCH_CHARS_FAILURE = "FETCH_CHARS_FAILURE";

export const getChars = () => (dispatch) => {
  dispatch({ type: FETCH_CHARS_START });
  fetch("https://www.anapioficeandfire.com/api/characters/148/")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_CHARS_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_CHARS_FAILURE, payload: err });
    });
};
