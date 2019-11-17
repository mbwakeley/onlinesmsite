import React, { Component } from "react";
import TopNav from "./components/TopNav";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import { fetchAllStatuses } from "./store/statuses/actions";
import { fetchAllUsers } from "./store/users/actions";
import { Container, Row, Col } from "reactstrap";
import SideNav from "./components/SideNav";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import UserProfile from "./components/user/UserProfile";
import UserSettings from "./components/user/UserSettings";
import FriendsList from "./components/friends/FriendsList";
import Conversations from "./components/conversations/Conversations";
import { fetchAllComments } from "./store/comments/actions";
import AddNewComment from "./components/dashboard/AddNewComment";
import { fetchAllMessages } from "./store/messages/actions";
import { fetchAllFriends } from "./store/friends/actions";
import NewConversationForm from "./components/conversations/NewConversationForm";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllStatuses());
    this.props.dispatch(fetchAllUsers());
    this.props.dispatch(fetchAllComments());
    this.props.dispatch(fetchAllFriends());
    this.props.dispatch(fetchAllMessages());
  }
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Container fluid>
            <Row>
              <Col xs="2">
                <SideNav />
              </Col>
              <Col>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/profile/:user_id" component={UserProfile} />
                  <Route path="/settings/:id" component={UserSettings} />
                  <Route path="/conversations" component={Conversations} />
                  <Route path="/friends" component={FriendsList} />
                  <Route path="/comments/:id" component={AddNewComment} />
                  <Route path="/conversation/:id" component={Conversations} />
                  <Route path="/newmessage" component={Conversations} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    loggedInUser: state.users.loggedInUser
  };
};

export default connect(
  mapStateToProps
  // { fetchAllUsers, fetchAllStatuses }
)(App);
