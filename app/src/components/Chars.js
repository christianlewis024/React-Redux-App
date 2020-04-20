import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getChars } from "../actions/charsActions";

const Chars = () => {
  const chars = useSelector((state) => state.chars);
  const isFetching = useSelector((state) => state.isFetching);

  const dispatch = useDispatch();
  const fetchChars = useCallback(() => dispatch(getChars()), [dispatch]);

  return (
    <>
      <h1>Game of Thrones Characters:</h1>
      {!chars && !isFetching && <p>Arya Stark Info:</p>}
      {isFetching && <p>Loading...</p>}
      {chars && (
        <p class="aryaCard">
          <div class="whiteBoxes">
            Name: {chars.name},<br />
          </div>
          <div class="whiteBoxes">Gender: {chars.gender},</div>
          <div class="whiteBoxes">
            Culture: {chars.culture}, <br />
          </div>
          <div class="whiteBoxes"></div>
          Born {chars.born},<br />
          <div class="whiteBoxes"></div> Aliases: {chars.aliases},<br />
          <div class="whiteBoxes"></div>Played By:
          {chars.playedBy}
        </p>
      )}

      <button onClick={fetchChars} className="button">
        Request Arya Stark Info
      </button>
    </>
  );
};

export default Chars;
