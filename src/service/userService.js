import axios from "../utils/axiosCustomize";

const validatePassword = (password) => {
  let regex = /^(?=.*[a-z])(?=.*\d)(?=.*(\W|_)).{8,}$/;
  return regex.test(password);
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const postCreateUser = async (data) => {
  return await axios.post("/users", data);
};

const postLogin = async (data) => {
  return await axios.post("/login", data);
};

const getAllUsers = async () => {
  return await axios.get("/users");
};

const getUsersPaginate = async (page, limit) => {
  return await axios.get(`/users?page=${page}&limit=${limit}`);
};

const deleteUser = async (id) => {
  return await axios.delete("/users", {
    data: {
      id: id,
    },
  });
};

const getUserAccount = async () => {
  return await axios.get("/account");
};

export {
  validatePassword,
  validateEmail,
  postCreateUser,
  postLogin,
  getAllUsers,
  getUsersPaginate,
  deleteUser,
  getUserAccount,
};
