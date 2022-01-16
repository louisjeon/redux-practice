import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const id = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === +id);

  return (
    <>
      <h1>Detail</h1>
      {toDo?.text} {toDo?.id}
    </>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
