<template>
  <v-container  class="fluid">
    <v-row>
      <v-col class=" d-flex flex-wrap">
       <v-card
          elevation ="15"
          width="300"
          outlined
          class=" d-flex flex-wrap my-5 mx-5"
          cols="4"
          
        >
         <!-- <v-img height="auto" width="auto" src="../assets/profile.png"></v-img> -->

          <v-card-title>{{userProfile.name}}</v-card-title>
         

          <v-card-text>
            <v-row  class="d-flex ml-1 " align="center">
              {{userProfile.email}}
            </v-row>
            <br />
            <br />

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
       <v-col
          cols="12"
          sm="6"
        >
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
    <v-row>
       <v-col
          cols="12"
          sm="6"
        >
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
      items: ['No diet', 'Vegetarian', 'Vegan', 'Paleo', 'Ketogenic'],
      value: [],
      items1: ['Gluten', 'Peanut', 'Seafood', 'Wheat', 'Dairy'],
      value1: [],
    };
  },
  mounted() {
    profileService
      .getUser()
      .then((response) => {
        this.userProfile = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped></style>
