import axios from "axios";

const headers = {
  "Content-Type": "text/json",
};

const shuffle = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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
}

const maxActivitiesReturned = 6;

const api = {
  postUser: function (data) {
    return axios.post("/api/users", { data }).then((res) => {
      const responseData = res.data;
      return responseData;
    });
  },

  getSystemActivities: function () {
    return axios
      .get("/api/activities/system")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  },

  getSystemActivityById: function (id) {
    return axios
      .get("/api/activities/system/" + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  },

  getSystemActivitiesByType: function (type) {
    // if type is all, get all activities
    let mind = [];
    let body = [];
    let social = [];
    let twoOfEach = [];
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
        };

        shuffle(mind);
        shuffle(body);
        shuffle(social);

        twoOfEach.push(mind[0]);
        twoOfEach.push(body[0]);
        twoOfEach.push(social[0]);
        twoOfEach.push(mind[1]);
        twoOfEach.push(body[1]);
        twoOfEach.push(social[1]);
        
        return twoOfEach;
      }

      );
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
