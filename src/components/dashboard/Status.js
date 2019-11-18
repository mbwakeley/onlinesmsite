import React from "react";
import Moment from "react-moment";
import { ListGroupItem } from "reactstrap";
import { Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Comments from "./Comments";

const Status = ({ status, user }) => {
  if (user) {
    return (
      <ListGroupItem>
        <Row>
          <Col xs="1">
            <img width="100px" src={user.photo_url} alt="" />
          </Col>
          <Col xs="5">
            <Link to={`/profile/${user.id}`}>
              <h5>{user.name}</h5>
            </Link>
            <p>{status.content}</p>
          </Col>
          <Col>
            <Moment format="MM/DD/YYYY HH:mm A">{status.createdAt}</Moment>
          </Col>
        </Row>
        <Row>
          <NavLink
            className="ml-3 mt-3 mb-3"
            style={{ color: "blue", cursor: "pointer" }}
            to="/comments/:id"
          >
            <ListGroupItem>See/Add Comment</ListGroupItem>
          </NavLink>
        </Row>
        <Row>
          <Comments status_id={status.id} />
        </Row>
      </ListGroupItem>
    );
  } else {
    return <div>loading...</div>;
  }
};

const mapStateToProps = (state, props) => {
  return {
    user: state.users.all.filter(user => user.id === props.status.user_id)[0]
  };
};
export default connect(mapStateToProps)(Status);
