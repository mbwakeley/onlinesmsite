import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStatus } from "../../store/statuses/actions";

const NewStatusForm = () => {
  const [newStatus, setNewStatus] = useState("");
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.users.loggedInUser);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      addStatus({
        content: newStatus,
        user_id: loggedInUser.id
      })
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-group mt-4">
          <h3 for="newStatus">Add New Status</h3>
          <textarea
            class="form-control"
            type="text"
            id="newStatus"
            rows="3"
            onChange={event => setNewStatus(event.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <hr />
    </div>
  );
};
export default NewStatusForm;
