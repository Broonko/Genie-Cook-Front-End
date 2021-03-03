

const axios = require("axios");
const api = axios.create({
  baseURL:
    "https://api.spoonacular.com/recipes/findByIngredients?apiKey=d44a9f25d4934489975bd7efa617bb08&ingredients=",
  timeout: 2000,
});

export default {
  async getAllRecipes() {
    let query = 'chicken'
    const response = await api.get(`${query}`);
    console.log(response);
    return response;
  },
};
