import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const BASE_URL = "youtube-v31.p.rapidapi.com";
const options = {
   params: {
      maxResults: "50",
   },
   headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": BASE_URL,
   },
};

export const ApiService = {
   async fetching(url) {
      const respons = await axios.get(
         `${"https://"}/${BASE_URL}/${url}`,
         options
      );
      return respons;
   },
};
