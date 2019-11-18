import React from "react";
import { connect } from "react-redux";
import { Row, Col, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Comment = props => {
  console.log("prop comments", props);

  return (
    <ListGroupItem>
      <Row>
        <Col>
          <Link to={`/profile/${props.user.id}`}>
            <h5>{props.user.name}</h5>
          </Link>
          <div>{props.comment.content}</div>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

const mapStateToProps = (state, props) => ({
  user: state.users.all.filter(user => user.id == props.comment.user_id)[0]
});

export default connect(mapStateToProps)(Comment);
