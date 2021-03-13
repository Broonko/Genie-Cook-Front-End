<template>
  <v-container fluid class="">
    <v-row>
      <v-col class="px-0" cols="12" md="10" lg="8">
        <v-img
          width="auto"
          class="image d-flex align-end flex-column"
          src="../assets/GenieTronco.png"
          alt=""
        >
          <v-card class="mx-auto" width="70%" color="transparent" elevation="0">
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
        </v-img>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col class="text-center">
        <h2>Your Favourites</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row fluid class="d-flex" align="center" height="" width="">
      <v-col cols="12">
        <v-sheet rounded-corner class="pa-5" color="blue">
          <v-card rounded-corner elevation="24" max-width="444" class="mx-auto">
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
        </v-sheet>
      </v-col>
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

.image {
  object-fit: cover;
}

.genie {
  background: url("../assets/genioFondo.png");
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
