import React from "react";
import { connect } from "react-redux";
import ConversationsListItem from "./ConversationsListItem";
import { ListGroup } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ConversationsList = props => {
  console.log("lOC-Props", props);
  const listofConversations = props.myCoversations.map((id, i) => (
    <ConversationsListItem key={i} otherPerson_id={id} />
  ));
  console.log("listofConversations", props.myCoversations);

  return (
    <div style={{ display: "flex" }}>
      <div class="container">
        <div class="col">
          <Link to={`/newmessage/`}>
            <button class="btn btn-primary btn-lg mt-3 mb-3">
              New Message
            </button>
          </Link>
          <hr />
          <ListGroup>{listofConversations}</ListGroup>
        </div>
      </div>
    </div>
  );
};

ConversationsList.propTypes = {
  myCoversations: PropTypes.arrayOf(PropTypes.number)
};

const mapStatetoProps = state => {
  return {
    myCoversations: state.messages.all.reduceRight((acc, msg) => {
      if (!acc.includes(msg.recipient_id) && !acc.includes(msg.sender_id)) {
        if (msg.recipient_id === state.users.loggedInUser.id) {
          acc.push(msg.sender_id);
        } else if (msg.sender_id === state.users.loggedInUser.id) {
          acc.push(msg.recipient_id);
        }
      }
      return acc;
    }, [])
  };
};

export default connect(mapStatetoProps)(ConversationsList);
