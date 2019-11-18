import React from "react";
import ConversationsList from "./ConversationsList";
import ConversationView from "./ConversationView";

const Conversations = props => {
  let otherPerson = Number(props.match.params.id) || 0;

  return (
    <div>
      <div class="container">
        <h2 class="text-center">Conversations</h2>

        <hr />
        <div class="container">
          <div class="row">
            <div class="col-5">
              <ConversationsList otherPerson={otherPerson} />
            </div>
            <vr />
            <div class="col">
              <ConversationView otherPerson={otherPerson} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversations;
