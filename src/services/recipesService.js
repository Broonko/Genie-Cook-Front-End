const axios = require("axios");
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 6000
});

export default {
  async getAllRecipes(query) {
    const response = await api.get("/recipes/search/", {
      params: { ingredients: query }
    });
    console.log("getallrecipes" + response.data);
    return response.data;

    // await response.data.forEach(element => {
    //   console.log(JSON.stringify(element) + 'estamos aqui')
    // });
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
