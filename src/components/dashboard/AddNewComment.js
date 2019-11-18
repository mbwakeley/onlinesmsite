import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import Status from "./../dashboard/Status";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ListGroupItem
} from "reactstrap";
import { addComment } from "../../store/comments/actions";

const AddNewComment = props => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();

  const user = props.users.all[0]
    ? props.users.all.filter(user => user.id == props.match.params.id)[0]
    : [];

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addComment({ content: newComment }));
  };

  const statuses =
    props.statuses && props.statuses.all.length
      ? props.statuses.all
          .filter(status => status.userId == user.id)
          .map(status => <Status key={status.id} status={status} />)
      : [];

  return (
    <ListGroupItem>
      {/* <Row>
        <Col xs="2">
          <img src={user.photo_url} alt="" />
        </Col>
        <Col xs="7">
          <Link to={`/profile/${user.id}`}>
            <h5>{user.name}</h5>
          </Link>
          <p>{status.content}</p>
        </Col>
        <Col>
          <Moment format="MM/DD/YYYY HH:mm A">{status.createdAt}</Moment>
        </Col>
      </Row> */}
      <Row>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="newComment">Add Comment</Label>
            <Input
              type="text"
              id="newComment"
              onChange={event => setNewComment(event.target.value)}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Row>
      <Row>
        <p>{statuses}</p>
      </Row>
    </ListGroupItem>
  );
};
const mapStateToProps = state => {
  return {
    users: state.users,
    statuses: state.statuses
  };
};
export default connect(mapStateToProps)(AddNewComment);
