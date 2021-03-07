const axios = require("axios");
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 2000,
});

export default {
  async getAllRecipes(search) {
    console.log(search)
    const response = await api.get(`/recipes/${search}`);
    return response;
  },


  async getRecipes(recipesid) {
    console.log('Hola estoy en services y mi id es ' + recipesid)
    const response = await api.get(`/recipes/${recipesid}`);
    return response;
  },
}  

//   },
// }
// export default {
//   async getAllRecipes(search) {
//     //let query = "chicken";
//     console.log(search)
//     const response = await api.get(`/recipes/${search}`);
//     return response;
//   },
