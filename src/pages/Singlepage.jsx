import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { capitalize } from "../getaway";

export const Singlepage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [state, setState] = useState(null);

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => resp.json())
      .then((data) => setState(data));
  }, [id]);

  return (
    <div className="page">
      {state && (
        <>
          <h1>{capitalize(state.title)}</h1>
          <p>{capitalize(state.body)}</p>
          <button className="return-btn" onClick={goBack}>
            Go Back
          </button>
        </>
      )}
    </div>
  );
};

export default Singlepage;
