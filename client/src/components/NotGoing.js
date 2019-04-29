import React, { Component } from "react";
import { getNotGoing } from "../actions/actions";
import { connect } from "react-redux";

class NotGoing extends Component {
  componentDidMount() {
    getNotGoing();
  }
  render() {
    return (
      <div>
        {this.props.notgoing.map(user => (
          <div>
            <p>
              <img alt="img" src={user.picture} />
            </p>
            <p>
              Name: {user.fname} {user.lname}
            </p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    );
  }
}
function mapStateToProps(appState) {
  return {
    notgoing: appState.notgoing
  };
}
export default connect(mapStateToProps)(NotGoing);
