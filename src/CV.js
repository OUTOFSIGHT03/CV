import React, { Component } from "react";
import Personal from "./personal";
import Experience from "./experience";
import Contacts from "./contact";

class UserCV extends Component {
  render() {
    return (
      <>
        <Personal />
        <Experience />
        <Contacts />
      </>
    );
  }
}
export default UserCV;
