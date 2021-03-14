import axios from "axios";

const headers = {
  "Content-Type": "text/json",
};

const api = {
  postUser: function (data) {
    console.log("req postUser data", data);
    return axios.post("/api/users", { data }).then((res) => {
      const responseData = res.data;
      console.log("responseData", responseData);
      return responseData;
    });
  },
};

export default api;
