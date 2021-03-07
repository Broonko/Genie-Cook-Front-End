<template>
    <div>

    </div>
</template>

<script>

import recipesService from "@/services/recipesService";

export default {
  name: "Recipes",
  data() {
    return {
      recipeList: [],
      overlay: false,
    };
  },
  props: ["search"],

  mounted() {
    recipesService
      .getRecipes(this.$route.params.recipesid)
      .then((response) => {
        this.recipeList = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped></style>
