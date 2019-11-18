import React from "react";
import { Card, CardBody, CardTitle, CardText, Col, CardImg } from "reactstrap";
import Moment from "react-moment";
import { connect } from "react-redux";

const ConversationViewMessage = props => {
  console.log("Conversation-View-Message", props);

  // if (props.users) {
  if (props.msg.sender_id == props.loggedInUser.id) {
    return (
      <Col>
        <Card body className="text-right mb-3">
          <div>
            <img
              width="100px"
              class="img-responsive pull-right "
              src={props.otherUser.photo_url}
              alt="person"
            />
          </div>
          <CardBody>
            <CardTitle>
              <h5>Sender: {props.otherUser.name}</h5>
            </CardTitle>
            <CardTitle>
              <Moment format="MM/DD/YYYY HH:mm A">
                {props.msg.created_at}
              </Moment>
            </CardTitle>
            <CardText>{props.msg.body}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  } else {
    return (
      <Col>
        <Card body className="mb-3">
          <img width="100px" src={props.otherUser.photo_url} alt="person" />
          <CardBody>
            <CardTitle>
              <h5>Sender: {props.otherUser.name}</h5>
            </CardTitle>
            <CardTitle>
              <Moment format="MM/DD/YYYY HH:mm A">
                {props.msg.created_at}
              </Moment>
            </CardTitle>
            <CardText>{props.msg.body}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
  // } else {
  //   return <div></div>;
  // }
};

const mapStateToProps = (state, props) => {
  console.log("mts messages", state);
  const otherUserId =
    state.users.loggedInUser.id === props.msg.sender_id
      ? props.msg.recipient_id
      : props.msg.sender_id;
  console.log("otherUserId", otherUserId);
  return {
    otherUser: state.users.all.find(user => user.id === props.msg.sender_id),
    messages: state.messages.all,
    loggedInUser: state.users.loggedInUser
  };
};

export default connect(mapStateToProps)(ConversationViewMessage);
