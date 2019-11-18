import React from "react";
import { connect } from "react-redux";
import ConversationViewMessage from "./ConversationViewMessage";
import { ListGroup } from "reactstrap";
import NewConversationForm from "./NewConversationForm";
import NewMessageForm from "./NewMessageForm";
import moment from "moment";

const ConversationView = props => {
  console.log("ConversationView", props);

  const listOfMessages = props.messages
    .sort((a, b) => moment(a.created_at) - moment(b.created_at))
    .map(msg => <ConversationViewMessage key={msg.id} msg={msg} />);

  if (props.otherPerson) {
    return (
      <>
        <ListGroup>{listOfMessages}</ListGroup>
        <NewMessageForm otherPerson={props.otherPerson} />
      </>
    );
  } else {
    return <NewConversationForm />;
  }
};

const mapStateToProps = (state, props) => {
  return {
    messages: state.messages.all.filter(
      msg =>
        (msg.sender_id === props.otherPerson &&
          msg.recipient_id === state.users.loggedInUser.id) ||
        (msg.recipient_id === props.otherPerson &&
          msg.sender_id === state.users.loggedInUser.id)
    )
  };
};

export default connect(mapStateToProps)(ConversationView);
