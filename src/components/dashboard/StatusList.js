import React from "react";
import { useSelector } from "react-redux";
import Status from "./Status";
import { ListGroup } from "reactstrap";

const StatusList = () => {
  const statuses = useSelector(state => state.statuses.all);
  let listOfStatuses = statuses.map(status => (
    <Status key={status.id} status={status} />
  ));
  console.log("listOfStatuses", listOfStatuses);
  return <ListGroup>{listOfStatuses}</ListGroup>;
};

export default StatusList;
