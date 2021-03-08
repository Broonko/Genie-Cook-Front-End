const axios = require("axios");
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 2000
});

export default {
  async getAllRecipes(query) {
    const response = await api.get("/recipes/search/", {
      params: { ingredients: query }
    });
    return response.data;
  },

  async getAllNutrition(id) {
    console.log(id);
    console.log("estoy dentro del servicio");
    const response = await api.get(`/recipes/${id}`);
    return response;
  },

  async getRecipesinformation(recipesid) {
    console.log("Hola estoy en services y mi id es " + recipesid);
    const response = await api.get(`/recipes/${recipesid}`);
    return response;
  },

  async getRecipesinstruccion(recipesid) {
    console.log("Hola estoy en services y mi id es " + recipesid);
    const response = await api.get(`/recipes/${recipesid}`);
    return response;
  }
};

//   },
// https://api.spoonacular.com/recipes/{id}/analyzedInstructions
// } https://api.spoonacular.com/recipes/{id}/information
// export default {
//   async getAllRecipes(search) {
//     //let query = "chicken";
//     console.log(search)
//     const response = await api.get(`/recipes/${search}`);
//     return response;
//   },
