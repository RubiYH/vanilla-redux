import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { remove } from "../store";

function Detail() {
  const toDo = useSelector((state) => state);
  const id = useParams().id;

  const getTodo = toDo.find((toDo) => toDo.id === parseInt(id));

  const dispatch = useDispatch();

  const onBtnClick = () => {
    dispatch(remove(id));
  };

  return (
    <>
      <h1>{getTodo?.id}</h1>
      <h5>{getTodo?.text}</h5>
      <button onClick={onBtnClick}>Delete</button>
      <br />
      <Link to="/">Back to Home</Link>
    </>
  );
}

export default Detail;
