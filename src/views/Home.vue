<template>
  <v-container fluid class="">
    <v-row>
      <v-col class="px-0" cols="12" md="10" lg="8">
        <v-img
          class="image d-flex align-end flex-column"
          src="../assets/GenieTronco.png"
          alt=""
        >
          <v-card class="mx-auto" width="70%" color="transparent" elevation="0">
            <v-card-text class="pa-1">
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
                color="yellow darken-3"
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
    <v-row class="mt-2">
      <v-col class="text-center">
        <h2 class="font">Your favourites wishes</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row fluid class="d-flex" align="center" height="" width="">
      <v-col cols="11" class="mx-auto">
        <v-sheet rounded class="pa-2" color="#063150">
          <v-card rounded elevation="20" max-width="444" class="mx-auto">
            <v-carousel height="200">
              <v-carousel-item
                v-for="(favourite, i) in favouriteList"
                :key="i"
                :src="favourite.image"
                reverse-transition="fade-transition"
                transition="fade-transition"
                :to="{ name: 'Recipe', params: { recipeid: favourite._id } }"
              >
                <router-link
                  class="underline"
                  :to="{ name: 'Recipe', params: { recipeid: favourite._id } }"
                >
                  <p>{{ favourite.title }}</p>
                </router-link>
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

export default {
  name: "Home",
  data() {
    return {
      search: "",
      favouriteList: []
    };
  },
  async mounted() {
    const user = await profileService.getUser();
    this.favouriteList = user.favourites;
  }
};
</script>

<style lang="scss" scoped>
.font {
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  color: "blue";
  font-size: 20px;
}
p {
  background-color: white;
  text-align: center;
  font-size: 18px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.image {
  object-fit: cover;
  filter: brightness(95%);
}

.underline {
  text-decoration: none;
  color: black;
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
