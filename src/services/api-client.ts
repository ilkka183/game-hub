import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b255c7a11414a759477e6a364ead810"
  }
});
