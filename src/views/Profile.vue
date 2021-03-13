<template>
  <v-container>
    <v-row>
      <v-col class="card">
        <v-card
          color="blue lighten-3"
          elevation="5"
          width="400"
          outlined
          class="d-flex flex-wrap my-5 mx-5"
          cols="4"
        >
          <!-- <v-img height="auto" width="auto" src="../assets/profile.png"></v-img> -->

          <v-card-title>{{ userProfile.name }}</v-card-title>

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
          <v-expansion-panel v-for="(item, i) in days" :key="i">
            <v-expansion-panel-header>
              {{ item.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card v-for="(meal, idx) in item.meals" :key="idx">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="headline"
                      v-text="meal.mealTime"
                    ></v-card-title>
                    <v-card-subtitle v-text="meal.title"> </v-card-subtitle>
                    <v-card-actions>
                      <v-btn
                        class="ml-2 mt-5"
                        outlined
                        rounded
                        small
                        v-bind="attrs"
                        v-on="on"
                      >
                        recipe
                      </v-btn>
                    </v-card-actions>
                  </div>

                  <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="meal.image"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump'
                  ]"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Add
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
      userProfile: "",
      items: ["No diet", "Vegetarian", "Vegan", "Paleo", "Ketogenic"],
      value: [],
      items1: ["Gluten", "Peanut", "Seafood", "Wheat", "Dairy"],
      value1: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
      dialog: false,
      days: [
        {
          title: "monday",
          meals: [
            {
              mealTime: "Breakfast",
              title: "hola",
              id: "",
              image: ""
            },
            {
              mealTime: "Lunch",
              title: "hola",
              id: "",
              image: ""
            },
            {
              mealTime: "Dinner",
              title: "hola",
              id: "",
              image: ""
            }
          ]
        }
      ]
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
