import axios from "axios";

const instance = axios.create({
  baseURL: "https://mushy-baseball-cap-dove.cyclic.app",
});

export default instance;
