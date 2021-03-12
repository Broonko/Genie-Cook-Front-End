<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img :src="recipe.image"> </v-img>
        {{ recipe.title }}
        {{ recipe.steps }}
        <v-btn
          icon
          @click="updateFavourites(recipe._id)"
          :color="active ? 'red' : 'grey'"
        >
          {{ active }}

          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import recipesService from "@/services/recipesService";
import profileService from "@/services/profileService";
// (active === false ? active = true : active = false) &
export default {
  name: "Recipe",
  data() {
    return {
      recipe: {},
      overlay: false,
      active: ""
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
    console.log(this.$route.params.recipeid);
    profileService.getUser().then(response => {
      console.log(response.favourites);
      if (
        response.favourites.find(elem => elem === this.$route.params.recipeid)
      ) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
  methods: {
    updateFavourites: function(id) {
      recipesService.updateFavourites(id).then(response => {
        if (response.find(elem => elem === id)) {
          this.active = true;
        } else {
          this.active = false;
        }
      });
      console.log(this.active);
    }
  }
};
</script>

<style lang="scss" scoped></style>
