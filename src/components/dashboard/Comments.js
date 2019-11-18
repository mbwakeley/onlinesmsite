import React from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import { ListGroup } from "reactstrap";
import { useSelector } from "react-redux";

const Comments = props => {
  console.log("comments props", props);
  const comments = useSelector(state =>
    state.comments.all.filter(comment => comment.status_id == props.status_id)
  );
  const listOfComments = comments.map(comment => (
    <Comment key={comment.id} comment={comment} />
  ));

  return <ListGroup>{listOfComments}</ListGroup>;
};

export default connect()(Comments);
