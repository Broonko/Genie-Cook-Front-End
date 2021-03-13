<template>
  <v-container :style="cssProps" fluid class="genie">
    <v-row>
      <v-col class="mt-15" cols="12" md="10" lg="8">
        <v-card class="mt-15" elevation="0">
          <v-card-text>
            <v-text-field
              flat
              background-color="white"
              prepend-inner-icon="mdi-magnify"
              color="black"
              v-model="search"
              label="Search recipes by ingredients"
              placeholder="Enter separated by comas"
              outlined
              rounded
              dense
            ></v-text-field>
            <v-btn
              color="teal lighten-1"
              dark
              rounded
              block
              :to="{ name: 'Recipes', params: { search: search } }"
              >search</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="" align="center" height="250" width="250">
      <v-card elevation="24" max-width="444" class="mx-auto mt-5">
        <v-carousel height="300">
          <v-carousel-item
            v-for="(favourite, i) in favouriteList"
            :key="i"
            :src="favourite.image"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <p background-color="white">{{ favourite.title }}</p>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import profileService from "@/services/profileService";
import recipesService from "@/services/recipesService";

export default {
  // <div class="backgr">
  // <v-img src="" no-repeat></v-img>
  // ../assets/genioFondo.png
  name: "Home",
  data() {
    return {
      search: "",
      favouriteList: [],
      cssProps: {
        backgroundImage: `url(${require("../assets/genioFondo.png")})`
      }
    };
  },
  mounted() {
    profileService
      .getUser()
      .then(response => {
        response.favourites.forEach(id => {
          recipesService.getRecipesinformation(id).then(response => {
            this.favouriteList.push({
              image: response.image,
              title: response.title
            });
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
p {
  background-color: black;
  text-align: center;
  font-size: 18px;
}
.genie {
  background: src("../assets/genioFondo.png");
}
.backgr {
  filter: hue-rotate(20deg);
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: brightness(85%);
}
.imgBack {
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
//   background: url("../assets/genio1.png") no-repeat;
//   background-size: 100%;
//   width: auto;
//   display: flex;
//
</style>
