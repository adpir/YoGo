import axios from "axios";

const headers = {
  "Content-Type": "text/json",
};

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
        return res.data.slice(0, maxActivitiesReturned);
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
    if (type === "all") {
      return this.getSystemActivities();
    }
    return axios
      .get("/api/activities/system/?type=" + type)
      .then((res) => {
        return res.data.slice(0, maxActivitiesReturned);
      })
      .catch((err) => console.log(err));
  },
};

export default api;
