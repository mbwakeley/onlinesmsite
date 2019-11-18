import React from "react";
import { connect } from "react-redux";
import Status from "./../dashboard/Status";

const UserProfile = props => {
  console.log("props", props.users);
  const user = props.users.all[0]
    ? props.users.all.filter(usr => usr.id == props.match.params.user_id)[0]
    : [];

  const statuses =
    props.statuses && props.statuses.all.length
      ? props.statuses.all
          .filter(status => status.user_id === user.id)
          .map(status => <Status key={status.id} status={status} />)
      : [];

  console.log("statuses", statuses);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div class="container">
          <button
            class="btn btn-primary mt-3"
            onClick={() => props.history.goBack()}
          >
            GO BACK
          </button>
          <h1 class="text-center">USER PROFILE</h1>
        </div>
      </div>
      <hr />
      <div class="media p-3 mb-2 bg-secondary text-white">
        <img
          width="200px"
          src={user.photo_url}
          class="align-self-start mr-3"
          alt=""
        />
        <div class="media-body">
          <h2 class="display-3 mt-0">{user.name}</h2>
          <div>Phone: {user.phone}</div>
          <div>Email: {user.email}</div>
          <div>Company: {user.company}</div>
          <div>Address: {user.address}</div>
          <button class="btn btn-primary btn-lg mr-3 mt-3" href="#">
            Add Friend
          </button>
          <button class="btn btn-primary btn-lg mr-3 mt-3" href="#">
            Start Conversation
          </button>
          <button class="btn btn-primary btn-lg mr-3 mt-3" href="#">
            Remove Friend
          </button>
        </div>
      </div>
      <hr />
      <p>{statuses}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    statuses: state.statuses
  };
};
export default connect(mapStateToProps)(UserProfile);
