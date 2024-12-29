import axios from "axios";
const coreApi = axios.create({
  baseURL: "https://opentdb.com/",
});
export default coreApi;
