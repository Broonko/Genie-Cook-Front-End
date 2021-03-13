<template>
  <v-container class="fluid">
    <v-row>
      <v-col class="d-flex flex-wrap">
        <v-card
          elevation="5"
          width="300"
          outlined
          class="d-flex flex-wrap my-5 mx-auto"
          cols="4"
          v-for="(recipe, idx) in recipeList"
          :key="idx"
        >
          <router-link
            :to="{ name: 'Recipe', params: { recipeid: recipe._id } }"
          >
            <v-img height="300" width="300" :src="recipe.image"></v-img>

            <v-card-title>
              {{ recipe.title }}
            </v-card-title>
          </router-link>
          <v-card-text>
            <v-row class="d-flex mx-2" align="center">
              Calories: {{ recipe.calories }} <br />
              Carbs: {{ recipe.carbs }} <br />
              Protein: {{ recipe.protein }} <br />
              Fat: {{ recipe.fat }}
            </v-row>
            <br />
            <v-btn
              icon
              @click="toggleFavourites(idx)"
              :color="isFavourite(idx) ? 'red' : 'grey'"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
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
      id: "",
      active: [false, false, false]
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
  computed: {},
  methods: {
    toggleFavourites: function(idx) {
      this.active[idx] === false
        ? this.$set(this.active, idx, true)
        : this.$set(this.active, idx, false);
    },
    isFavourite: function(idx) {
      return this.active[idx];
    }
  }
};
</script>

<style lang="scss" scoped></style>
