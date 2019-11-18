import React from "react";
import ListGroup from "reactstrap/es/ListGroup";
import { NavLink } from "react-router-dom";
import ListGroupItem from "reactstrap/es/ListGroupItem";
import { connect } from "react-redux";

const SideNav = props => {
  return (
    <ListGroup className="mt-3">
      <NavLink to="/dashboard">
        <ListGroupItem>Home</ListGroupItem>
      </NavLink>
      <NavLink to={`/profile/${props.loggedInUser.id}`}>
        <ListGroupItem>Profile</ListGroupItem>
      </NavLink>
      <NavLink to="/friends">
        <ListGroupItem>Friends</ListGroupItem>
      </NavLink>
      <NavLink to="/conversations">
        <ListGroupItem>Conversations</ListGroupItem>
      </NavLink>
    </ListGroup>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUser: state.users.loggedInUser
  };
};

export default connect(mapStateToProps)(SideNav);
