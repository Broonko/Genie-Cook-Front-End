<template>
  <v-container>
    <v-row>
      <v-col class="card">
        <v-card
          color="grey lighten-1"
          elevation="15"
          width="400"
          outlined
          class=" d-flex flex-wrap my-5 mx-5"
          cols="4"
        >
          <!-- <v-img height="auto" width="auto" src="../assets/profile.png"></v-img> -->

          <v-card-title>{{ userProfile.name }}</v-card-title>

          <v-card-text>
            <v-row class="d-flex ml-1 " align="center">
              {{ userProfile.email }}
            </v-row>
            <br />
            <br />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="card">
      <v-col cols="12" sm="6">
        <v-select
          v-model="value"
          :items="items"
          chips
          label="Diets"
          multiple
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="card">
      <v-col cols="12" sm="6">
        <v-select
          v-model="value1"
          :items="items1"
          chips
          label="Intolerance"
          multiple
          outlined
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import profileService from "@/services/profileService";

export default {
  name: "Profile",
  data() {
    return {
      userProfile: "",
      items: ["No diet", "Vegetarian", "Vegan", "Paleo", "Ketogenic"],
      value: [],
      items1: ["Gluten", "Peanut", "Seafood", "Wheat", "Dairy"],
      value1: []
    };
  },
  mounted() {
    profileService
      .getUser()
      .then(response => {
        this.userProfile = response;
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
