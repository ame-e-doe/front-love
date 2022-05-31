import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (name, email, password) => {
  return axios.post(API_URL + "signup", {
    name,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("username", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("username");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("username"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser
};

export default AuthService;
