import axios from "axios";
const maxActivitiesReturned = 3;

const headers = {
  "Content-Type": "text/json",
};

const shuffle = function (array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const api = {
  postUser: function (data) {
    return axios.post("/api/users", { data }).then((res) => {
      const responseData = res.data;
      return responseData;
    });
  },
  postActivity: function (data) {
    return axios
      .post("/api/activities/user", data)
      .then((res) => {
        return res;
      })
      .catch((err) => console.log("postActivity err", err));
  },
  getSystemActivities: function () {
    return axios
      .get("/api/activities/system")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  },
  getCurrentUser: function () {
    return axios
      .get("/api/user")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("getCurrentUser error", err));
  },
  getUserIdByEmail: function (email) {
    return axios
      .get("/api/users/?email=" + email)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("getUserIdByEmail error", err));
  },
  getSystemActivityById: function (id) {
    return axios
      .get("/api/activities/system/" + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  },
  getUserActivityById: function (id) {
    return axios
      .get("/api/activities/user-activity/" + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  },
  getUserActivities: function (userId) {
    return axios
      .get("/api/activities/user/" + userId)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  },
  getSystemActivitiesByType: function (type) {
    let mind = [];
    let body = [];
    let social = [];
    let oneOfEach = [];
    // if type is all, get all activities
    if (type === "all") {
      return this.getSystemActivities().then((res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].type === "mind") {
            mind.push(res[i]);
          } else if (res[i].type === "body") {
            body.push(res[i]);
          } else {
            social.push(res[i]);
          }
        }

        shuffle(mind);
        shuffle(body);
        shuffle(social);

        oneOfEach.push(mind[0]);
        oneOfEach.push(body[0]);
        oneOfEach.push(social[0]);

        return oneOfEach;
      });
    }

    if (type === "mind") {
      return this.getSystemActivities().then((res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].type === "mind") {
            mind.push(res[i]);
          }
        }
        shuffle(mind);
        let sliced = mind.slice(0, maxActivitiesReturned);
        return sliced;
      });
    }

    if (type === "body") {
      return this.getSystemActivities().then((res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].type === "body") {
            body.push(res[i]);
          }
        }
        shuffle(body);
        let sliced = body.slice(0, maxActivitiesReturned);
        return sliced;
      });
    }

    if (type === "social") {
      return this.getSystemActivities().then((res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].type === "social") {
            social.push(res[i]);
          }
        }
        shuffle(social);
        let sliced = social.slice(0, maxActivitiesReturned);
        return sliced;
      });
    }

    return axios
      .get("/api/activities/system/?type=" + type)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  },
};

export default api;
