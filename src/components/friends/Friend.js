import React from "react";
import { connect } from "react-redux";
import { Row, Col, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Friend = props => {
  console.log("friend-props", props);

  return (
    <ListGroupItem>
      <Row>
        <Col xs="2">
          <img src={props.friend.photo_url} alt="person" />
        </Col>

        <Col xs="7">
          <Link to={`/profile/${props.friend.id}`}>
            <h5>{props.friend.name}</h5>
          </Link>
          <button class="btn btn-primary mr-3 mt-3" href="#">
            Start Conversation
          </button>
          <button class="btn btn-danger mr-3 mt-3" href="#">
            Remove Friend
          </button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

const mapStateToProps = (state, props) => ({
  user: state.users.all.filter(user => user.id == props.friend)[0]
});

export default connect(mapStateToProps)(Friend);
