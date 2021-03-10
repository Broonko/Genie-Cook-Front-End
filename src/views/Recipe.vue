<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img :src="recipe.image"> </v-img>
        {{ recipe.title }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import recipesService from "@/services/recipesService";

export default {
  name: "Recipe",
  data() {
    return {
      recipe: {},
      overlay: false
    };
  },
  mounted() {
    recipesService
      .getRecipesinformation(this.$route.params.recipeid)
      .then(response => {
        this.recipe = response;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped></style>
