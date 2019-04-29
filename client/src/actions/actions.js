import store from "../store";
import axios from "axios";

export function getRandomUser() {
  axios.get("https://randomuser.me/api").then(resp => {
    const person = resp.data.results[0];

    store.dispatch({
      type: "GET_RANDOM_USER",
      payload: {
        fname: person.name.first,
        lname: person.name.last,
        picture: person.picture.large,
        email: person.email,
        phone: person.phone
      }
    });
  });
}

export function getGoing() {
  axios.get("api/going").then(resp => {
    store.dispatch({
      type: "GET_GOING",
      payload: resp.data
    });
  });
}

export function getNotGoing() {
  axios.get("api/notgoing").then(resp => {
    store.dispatch({
      type: "GET_NOT_GOING",
      payload: resp.data
    });
  });
}

export function going(person) {
  axios.post("/api/going", person).then(() => {
    getGoing();
  });
}

export function notgoing(person) {
  axios.post("/api/notgoing", person).then(() => {
    getNotGoing();
  });
}
