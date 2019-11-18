import React from "react";
import { connect } from "react-redux";
import { ListGroupItem, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ConversationsListItem = props => {
  console.log("conversations list item", props);
  return (
    <ListGroupItem>
      <Row>
        <Col xs="3">
          <img width="50px" src={props.otherUser.photo_url} alt="person" />
        </Col>
        <Col xs="8">
          <Link to={`/conversation/${props.otherUser.id}`}>
            <h5>{props.otherUser.name}</h5>
          </Link>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

const mapStateToProps = (state, props) => ({
  otherUser: state.users.all.find(user => user.id === props.otherPerson_id)
});

export default connect(mapStateToProps)(ConversationsListItem);
