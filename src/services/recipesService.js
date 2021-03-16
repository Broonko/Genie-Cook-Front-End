const axios = require("axios");
const api = axios.create({
  baseURL: "https://genie-cook.herokuapp.com//api",
  timeout: 6000
});

export default {
  async getAllRecipes(query) {
    const response = await api.get("/recipes/search/", {
      params: { ingredients: query }
    });
    console.log("getallrecipes" + response.data);
    return response.data;
  },
  async getRecipesinformation(recipeid) {
    const response = await api.get(`/recipes/${recipeid}`);
    return response.data;
  },
  async updateFavourites(recipeid) {
    const response = await api.put(
      `/users/favourites/${recipeid}`,
      {},
      { headers: { token: localStorage.getItem("token") } }
    );
    return response.data;
  }
};
