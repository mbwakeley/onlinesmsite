import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button, Col } from "reactstrap";
import { addMessage } from "../../store/messages/actions";

class NewMessageForm extends React.Component {
  state = {
    body: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addMessage({
      sender_id: this.props.loggedInUser.id,
      recipient_id: this.props.otherPerson,
      body: this.state.body
    });

    this.setState({ body: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Input
            className="mb-2"
            type="textarea"
            name="body"
            placeholder="message"
            onChange={e => this.setState({ body: e.target.value })}
            value={this.state.body}
          />

          <Button
            className="float-right"
            disabled={this.state.body ? false : true}
          >
            Submit
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser
});

export default connect(
  mapStateToProps,
  { addMessage }
)(NewMessageForm);
