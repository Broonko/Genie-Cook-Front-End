<template>
  <v-container class="fluid">
    <v-row>
      <v-col class=" d-flex flex-wrap">
        <v-card
          width="250"
          outlined
          class=" d-flex flex-wrap my-5 mx-5"
          cols="4"
          v-for="(list, idx) in recipeList"
          :key="idx"
        >
          <v-img height="250" width="250" :src="list.image"></v-img>

          <v-card-title>{{ list.title }}</v-card-title>

          <v-card-text>
            <v-row class="d-flex " align="center">
              <v-rating
                class="mx-4"
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
            <br />
            <br />

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import recipesService from "@/services/recipesService";
export default {
  name: "Search",
  data() {
    return {
      recipeList: [],
    };
  },
  props: ["search"],

  /*methods: {
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
  },*/

  mounted() {
    console.log(this.search);
    recipesService
      .getAllRecipes(this.search)
      .then((response) => {
        this.recipeList = response.data;
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped></style>
