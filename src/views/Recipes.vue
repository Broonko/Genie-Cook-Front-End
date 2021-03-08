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
          <router-link
            :to="{ name: 'RecipesOne', params: { recipesid: list.id } }"
          >
            <v-img height="250" width="250" :src="list.image"></v-img>

            <v-card-title>
              {{ getNutrition(list.id) }}
              {{ list.title }}
              {{ list.id }}
            </v-card-title>
          </router-link>
          <v-card-text>
            <v-row class="d-flex " align="center">
              <!-- <v-rating
                class="mx-4"
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating> -->

              <div
                class="grey--text ml-4"
                v-for="(item, i) in list.missedIngredients"
                :key="i"
              >
                {{ item.name }}
              </div>
            </v-row>
            <br />
            <br />

            <div v-for="(item, i) in list.usedIngredients" :key="i">
              {{ item.name }}
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
  name: "Recipes",
  data() {
    return {
      recipeList: [],
      overlay: false,
      id: ""
    };
  },
  props: ["search"],
  async mounted() {
    try {
      this.recipeList = await recipesService.getAllRecipes(this.search);
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    getNutrition: function() {
      console.log("estoy dentro del metodo");
      console.log(this.id);

      recipesService
        .getAllNutrition(this.id)
        .then(response => {
          console.log(response.data);
          //this.id = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
