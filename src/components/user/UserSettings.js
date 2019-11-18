import React from "react";
import { connect } from "react-redux";

const UserSettings = props => {
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
          <h1 class="text-center">User Settings</h1>
        </div>
      </div>
      <hr />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(mapStateToProps)(UserSettings);
