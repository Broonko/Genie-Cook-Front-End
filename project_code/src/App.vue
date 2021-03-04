<template>
  <v-app>
    
      <v-card color="grey-4" flat height="200px" tile>
        <v-toolbar  prominent dense dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Title</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
      <v-main>
        <v-row justify="center">
      <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field 
            v-model="search" 
            label="search"
            placeholder="Introduce your ingredients"
            outlined
            
          ></v-text-field>
          <v-btn block @click="getRecipes()">search </v-btn>
        </v-col>
        </v-row>
        
     
        <v-row>
          <v-col class="d-flex" cols="4" v-for="(list, idx) in recipeList" :key="idx">{{ list.title }} {{ list.id }} 
            <v-img height="200" width="200" :src="list.image"></v-img>
            </v-col>
            </v-row>
          

    </v-main>

    <v-footer padless dark>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import recipesService from "@/services/recipesService";
export default {
  name: "App",

  components: {},

  data() {
    return {
      show: false,
      searchIngredients: "",
      searchclick: false,
      recipeList: [],
    };
  },
  props: {
    search: String
  },


  /*mounted() {
    recipesService.getAllRecipes().then((response) => {
      console.log(response.data);
    });
  },
};*/

  methods: {
    getRecipes: function() {
      recipesService
        .getAllRecipes(this.search)
        .then((response) => {
          this.recipeList = response.data;
          console.log(response.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
      //console.log(this.recipesService);
    },
  },
};
</script>
