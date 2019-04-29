import React, { Component } from "react";
import { getGoing } from "../actions/actions";
import { connect } from "react-redux";

class Going extends Component {
  componentDidMount() {
    getGoing();
  }
  render() {
    return (
      <div>
        {this.props.going.map(user => (
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
    going: appState.going
  };
}
export default connect(mapStateToProps)(Going);
