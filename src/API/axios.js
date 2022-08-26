import axios from "axios";
import { BASE_URL } from "../constants";

export const API =  axios.create({
  baseURL:BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});

