<template>
  <v-container>
    <v-row>
      <v-col class="card">
        <v-card
          dark
          color="#063150"
          elevation="5"
          width="400"
          outlined
          class="d-flex flex-wrap my-5 mx-5"
          cols="4"
        >
          <v-card-title>{{ userProfile.name }}</v-card-title>
          <v-spacer></v-spacer>
          <v-avatar elevation="2" class="mx-3 my-3" width="100" height="100">
            <v-img
              class="text-center"
              position="center, center"
              :src="require('@/assets/avatarGif.gif')"
            />
          </v-avatar>

          <v-card-text>
            <v-row class="d-flex ml-1" align="center">
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
    <v-row class="mt-5">
      <v-col class="text-center">
        <h2>Meal Planning</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-expansion-panels>
          <v-expansion-panel v-for="(day, i) in days" :key="i">
            <v-expansion-panel-header>
              {{ day }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card
                class="my-3"
                elevation="5"
                color="blue lighten-4"
                v-for="(time, idx) in times"
                :key="idx"
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="headline" v-text="time"></v-card-title>
                    <v-card-subtitle v-text="formatRecipe(day, time)">
                    </v-card-subtitle>
                    <v-card-actions>
                      <v-btn
                        class="ml-2 mt-5"
                        outlined
                        rounded
                        small
                        v-bind="attrs"
                        v-on="on"
                        @click="selectMeal(day, time)"
                      >
                        Add
                      </v-btn>
                    </v-card-actions>
                  </div>
                  <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="formatImage(day, time)"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Recipe</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-for="(recipe, idx) in favouriteList" :key="idx">
              <v-col>
                <v-card class="my-2" elevation="5">
                  <v-row>
                    <v-col class="pa-0" cols="5">
                      <v-img max-width="150" :src="recipe.image"></v-img>
                    </v-col>
                    <v-col cols="5">
                      {{ recipe.title }}
                    </v-col>
                    <v-col class="pa-0" cols="1">
                      <v-btn
                        icon
                        @click="addPlanning(idx, selectedTime, selectedDay)"
                      >
                        <v-icon> mdi-plus </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import profileService from "@/services/profileService";

export default {
  name: "Profile",
  data() {
    return {
      selectedDay: "",
      selectedTime: "",
      userProfile: "",
      favouriteList: [],
      items: ["No diet", "Vegetarian", "Vegan", "Paleo", "Ketogenic"],
      value: [],
      items1: ["Gluten", "Peanut", "Seafood", "Wheat", "Dairy"],
      value1: [],
      dialog: false,
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      times: ["Breakfast", "Lunch", "Dinner"],
      meals: {}
    };
  },
  async mounted() {
    this.userProfile = await profileService.getUser();
    if (this.userProfile.mealPlanning) {
      this.meals = this.userProfile.mealPlanning;
    }
    this.favouriteList = this.userProfile.favourites;
  },
  methods: {
    addPlanning: async function(idx, time, day) {
      this.meals = await profileService.addMeal(
        this.userProfile.favourites[idx]._id,
        day.toLowerCase(),
        time.toLowerCase()
      );
      this.dialog = false;
    },
    formatRecipe: function(day, time) {
      if (
        this.meals[day.toLowerCase()] &&
        this.meals[day.toLowerCase()][time.toLowerCase()]
      ) {
        return this.meals[day.toLowerCase()][time.toLowerCase()]["title"];
      } else {
        return "";
      }
    },
    formatImage: function(day, time) {
      if (
        this.meals[day.toLowerCase()] &&
        this.meals[day.toLowerCase()][time.toLowerCase()]
      ) {
        return this.meals[day.toLowerCase()][time.toLowerCase()]["image"];
      } else {
        return "";
      }
    },
    selectMeal: function(day, time) {
      console.log(day, time);
      this.selectedDay = day;
      this.selectedTime = time;
    }
  },
  computed: {}
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
