import React from "react";
import axios from "axios";
import { API_URL, API_VERSION, API_TOKEN } from "../store/apiCall/apiUrl";

class Axios {
  defaultOptions = () => {
    return {
      baseURL: `${API_URL}`,
      headers: {
        token: localStorage.getItem("token"),
        customerid: localStorage.getItem("_id"),
        // customerid: localStorage.getItem("user_id"),
      },
    };
  };

  LogoutUser = (url) => {
    console.log(url, 6666);
    if (url.response !== undefined && url.response.status === 401) {
      console.log(url.response.status, "401 Unauthorized Api Call");
      localStorage.clear();
      window.location.replace("/");
    } else {
      console.log(url, "401 Unauthorized Api Call");
    }
  };

  get = (url, options = {}) => {
    return axios
      .get(url, { ...this.defaultOptions(), ...options })
      .then((res) => {
        if (res.data.message && res.data.message.includes("Not Authorized")) {
          let err = {
            response: {
              status: 401,
            },
          };
          this.LogoutUser(err);
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.LogoutUser(err);
          return err;
        } else {
          return err;
        }
      });
  };

  post = (url, data, options = {}) => {
    return axios
      .post(url, data, { ...this.defaultOptions(), ...options })
      .then((res) => {
        if (res.data.message && res.data.message.includes("Not Authorized")) {
          let err = {
            response: {
              status: 401,
            },
          };
          this.LogoutUser(err);
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.LogoutUser(err);
          return err;
        } else {
          return err;
        }
      });
  };

  put = (url, data, options = {}) => {
    return axios
      .put(url, data, { ...this.defaultOptions(), ...options })
      .then((res) => {
        if (res.data.message && res.data.message.includes("Not Authorized")) {
          let err = {
            response: {
              status: 401,
            },
          };
          this.LogoutUser(err);
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.LogoutUser(err);
          return err;
        } else {
          return err;
        }
      });
  };

  delete = (url, options = {}) => {
    return axios
      .delete(url, { ...this.defaultOptions(), ...options })
      .then((res) => {
        if (res.data.message && res.data.message.includes("Not Authorized")) {
          let err = {
            response: {
              status: 401,
            },
          };
          this.LogoutUser(err);
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.LogoutUser(err);
          return err;
        } else {
          return err;
        }
      });
  };
}

export default new Axios();
