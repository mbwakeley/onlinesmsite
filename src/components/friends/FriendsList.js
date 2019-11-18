import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import Friend from "./Friend";
import { ListGroup } from "reactstrap";

class FriendsList extends React.Component {
  state = {
    filterPhrase: ""
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const listOfFriends = this.props.friends
      .filter(
        friend =>
          (friend.requestorId == this.props.currentUser.id &&
            friend.accepted == true) ||
          (friend.requesteeId == this.props.currentUser.id &&
            friend.accepted == true)
      )
      .map(friend =>
        friend.requestorId === this.props.currentUser.id
          ? friend.requesteeId
          : friend.requestorId
      )
      .map(id => {
        for (let i = 0; i < this.props.users.length; i++) {
          if (id === this.props.users[i].id) {
            return this.props.users[i];
          }
        }
      })
      .filter(friend => friend.name.includes(this.state.filterPhrase))
      .map(friend => {
        return <Friend key={friend.id} friend={friend} />;
      });
    console.log("listOfFriends", listOfFriends);

    return (
      <div>
        <div style={{ display: "flex" }}>
          <div class="container">
            <h2 class="text-center">Friends</h2>
            <button
              class="btn btn-primary"
              onClick={() => this.props.history.goBack()}
            >
              GO BACK
            </button>
            <hr />
            <input
              id="searchInput"
              type="text"
              name="filterPhrase"
              className="flex"
              placeholder="Search your friends..."
              onChange={this.handleChange}
              style={{ marginBottom: "15px", width: "100%" }}
            />
          </div>
        </div>
        <ListGroup>{listOfFriends}</ListGroup>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, "state");
  return {
    friends: state.friends.all,
    currentUser: state.users.loggedInUser,
    users: state.users.all
  };
};

export default connect(mapStateToProps)(FriendsList);
