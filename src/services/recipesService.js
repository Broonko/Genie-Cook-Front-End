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

    await response.data.forEach(element => {
      console.log(JSON.stringify(element) + "estamos aqui");
    });
    return response.data;
  },
  async getRecipesinformation(recipeid) {
    console.log("Hola estoy en services y mi id es " + recipeid);
    const response = await api.get(`/recipes/${recipeid}`);
    return response.data;
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
