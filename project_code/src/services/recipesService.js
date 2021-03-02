import { query } from "express";

const axios = require("axios");
const api = axios.create({
  baseURL:
    "https://api.spoonacular.com/recipes/findByIngredients?apiKey=d44a9f25d4934489975bd7efa617bb08&ingredients",
  timeout: 2000
});

export default {
  getRecipes: async () => {
    return await api.get(`${query}`);
  }
};
