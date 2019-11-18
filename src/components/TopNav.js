import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="navbar navbar-dark bg-secondary">
      <h4 class="text-white">Sosh</h4>
      <NavLink to="/settings/id">
        <button class="btn btn-secondary pull-right">Member Settings</button>
      </NavLink>
    </nav>
  );
};

export default TopNav;
