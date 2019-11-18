import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../../store/messages/actions";
import { Form, FormGroup, Input, Col, Label, Button } from "reactstrap";

class NewConversationForm extends React.Component {
  state = {
    body: "",
    recipient_id: 0
  };

  handleSelect = e => {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  };

  handleSubmit = e => {
    console.log("handlesubmit", e);
    e.preventDefault();

    this.props.addMessage({
      sender_id: this.props.loggedInUser.id,
      recipient_id: this.state.recipient_id,
      body: this.state.body
    });
    this.setState({ body: "" });
  };

  render() {
    const conversationOptions =
      this.props.users.length > 0 &&
      this.props.users.map((user, i) => {
        return (
          <option sm={2} key={i} value={user.id}>
            {user.name}
          </option>
        );
      });
    return (
      <Form onSubmit={this.handleSubmit}>
        <h4 class="text-center">Send New Message</h4>
        <FormGroup row>
          <Label for="recipient" sm={2}>
            Friend:
          </Label>
          <Col sm={10}>
            <Input
              type="select"
              id="recipient"
              name="recipient_id"
              onChange={e => this.handleSelect(e)}
            >
              value={this.state.recipient_id}
              <option></option>
              {conversationOptions}
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="body" sm={2}>
            Message:
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="body"
              id="body"
              value={this.state.body}
              onChange={e => this.setState({ body: e.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button disabled={this.state.body ? false : true}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    loggedInUser: state.users.loggedInUser,
    users: state.users.all,
    friends: state.friends.all,
    otherUser: state.users.all.find(user => user.id === props.otherPerson)
  };
};

export default connect(
  mapStateToProps,
  { addMessage }
)(NewConversationForm);
