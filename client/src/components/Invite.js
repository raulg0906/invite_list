import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getRandomUser,
  going,
  notgoing,
  getGoing,
  getNotGoing
} from "../actions/actions";
import "../styles/Invite.css";

class Invite extends Component {
  componentDidMount() {
    getRandomUser();
    getGoing();
    getNotGoing();
  }

  markGoing = e => {
    e.preventDefault();
    going({
      picture: this.props.picture,
      fname: this.props.fname,
      lname: this.props.lname,
      phone: this.props.phone,
      email: this.props.email
    });
    getRandomUser();
  };
  markNotGoing = e => {
    e.preventDefault();
    notgoing({
      picture: this.props.picture,
      fname: this.props.fname,
      lname: this.props.lname,
      phone: this.props.phone,
      email: this.props.email
    });
    getRandomUser();
  };

  render() {
    return (
      <div className="container">
        <p>
          Going:{this.props.goingCount} NotGoing: {this.props.notGoingCount}
        </p>
        <p>
          <img className="picture" src={this.props.picture} />
        </p>
        <p>
          Name: {this.props.fname} {this.props.lname}
        </p>
        <p>Phone: {this.props.phone}</p>
        <p>Email: {this.props.email}</p>
        <div>
          <button className="goingButton" onClick={this.markGoing}>
            &#10003;
          </button>
          <button className="notgoingButton" onClick={this.markNotGoing}>
            x
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(appState) {
  return {
    ...appState.current,
    goingCount: appState.going.length,
    notGoingCount: appState.notgoing.length
  };
}
export default connect(mapStateToProps)(Invite);
