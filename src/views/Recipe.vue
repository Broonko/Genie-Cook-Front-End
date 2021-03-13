<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="5">
          <v-card-title>
            {{ recipe.title }}
          </v-card-title>
          <v-img :src="recipe.image"> </v-img>
          <v-btn
            align="end"
            fab
            large
            background="black"
            icon
            @click="updateFavourites(recipe._id)"
            :color="active ? 'red' : 'grey'"
          >
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-card-subtitle v-for="(mea, id) in recipe.measurements" :key="id">
            {{ mea }}
          </v-card-subtitle>
          <v-divider class="mx-4"></v-divider>
          <v-card-text v-for="(step, i) in recipe.steps" :key="i">
            {{ step }}
          </v-card-text>
        </v-card>
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
