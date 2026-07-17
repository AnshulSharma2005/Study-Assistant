import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-study-assistant-backend-yhcl.onrender.com",
});

export default API;