import axios from "axios";
//必须以REACT_APP_开头
//https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables
const api =
  process.env.REACT_APP_RECORDS_API_URL ||
  "https://5a54227777e1d20012fa0723.mockapi.io";

export const getAll = () => axios.get(`${api}/api/v1/records`);

export const create = body => axios.post(`${api}/api/v1/records`, body);

export const update = (id, body) =>
  axios.put(`${api}/api/v1/records/${id}`, body);
