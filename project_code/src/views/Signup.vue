<template>
  <div></div>
</template>

<script>
// import recipesService from "@/services/recipesService";

export default {
  name: "Search",
  data() {
    return {
      recipeList: [],
      overlay: false,
    };
  },
  props: ["search"],
};
</script>

<style lang="scss" scoped></style>
