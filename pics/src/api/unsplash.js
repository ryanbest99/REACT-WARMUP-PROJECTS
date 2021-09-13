import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 6fmQOLbPrNKdmjrZhGH6Hhd7-tT3O3a2wtw6M_cZCdg",
  },
});
