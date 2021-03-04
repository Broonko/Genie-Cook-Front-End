<template>
  <v-app>
    <v-row>
      <v-col>
        <v-card color="grey-4" flat height="200px" tile>
          <v-toolbar
            color="light grey"
            prominent
            dense
            class="grey lighten-3 blue--text"
            app
          >
            <v-icon
              class="mt-8 "
              color="blue"
              large
              dark
              v-bind="attrs"
              v-on="on"
            >
              mdi-home
            </v-icon>

            <v-spacer></v-spacer>

            <v-tabs justify="center">
              <v-spacer></v-spacer>
              <v-tab>E-commerce</v-tab>
              <v-tab>Tips</v-tab>

              <v-spacer></v-spacer>
            </v-tabs>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon class="blue--text">mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon class="blue--text">mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
    <v-main>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="search"
            label="search"
            placeholder="Introduce your ingredients"
            outlined
            rounded
          ></v-text-field>
          <v-btn rounded block @click="getRecipes()">search</v-btn>
        </v-col>
      </v-row>

      <!--<v-row>
        <v-col
          class="d-flex"
          cols="4"
          v-for="(list, idx) in recipeList"
          :key="idx"
          >{{ list.title }} id:{{ list.id }}
          <v-img
            class="d-flex"
            height="200"
            width="200"
            :src="list.image"
          ></v-img>
        </v-col>
      </v-row>-->

      <v-row row wrap>
        <v-col>
          <v-card class="d-flex"
          cols="4"
          v-for="(list, idx) in recipeList"
          :key="idx">
          <v-img
            
            height="250"
            width="250"
            :src="list.image"
          ></v-img>

          <v-card-title>{{ list.title }}</v-card-title>

          <v-card-text>
            <v-row class="d-flex " align="center" >
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">
                4.5 (413)
              </div>
            </v-row>


            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          </v-card>
          
        </v-col>
      </v-row>
    </v-main>

    <v-footer class="grey lighten-3" color="light grey">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>GenieCook</strong>
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
    search: String,
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
