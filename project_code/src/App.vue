<template>
  <v-app>
    <v-card color="grey-4" flat height="200px" tile>
      <v-toolbar
        color="light grey"
        prominent
        dense
        class="grey lighten-3 blue--text"
      >
        <router-link class="my-auto" to="/">
          <v-icon color="blue lighten-1" large dark>
            mdi-home
          </v-icon>
        </router-link>

        <v-spacer></v-spacer>

        <v-tabs justify="center">
          <v-spacer></v-spacer>
          <v-tab>Tips & Ideas</v-tab>

          <v-spacer></v-spacer>
        </v-tabs>
        <v-spacer></v-spacer>

        <div class="my-auto">
          <!--<v-btn class="mt-12" color="primary" @click="overlay = !overlay">
                Show Overlay
              </v-btn>-->

          <v-btn color="blue lighten-1" fab dark @click="overlay = !overlay">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </div>
      </v-toolbar>
      <v-overlay
        :absolute="absolute"
        :opacity="opacity"
        :value="overlay"
        :z-index="zIndex"
      >
        <v-tabs
          v-model="tab"
          show-arrows
          background-color="blue darken-4 "
          icons-and-text
          dark
          grow
        >
          <v-tabs-slider color="grey darken-1"></v-tabs-slider>
          <v-tab v-for="(i, idx) in tabs" :key="idx">
            <v-icon large>{{ i.icon }}</v-icon>
            <div class="caption py-1">{{ i.name }}</div>
          </v-tab>

          <v-btn icon color="blue lighten-2" @click="overlay = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>

          <v-tab-item> <Login></Login> </v-tab-item>
          <v-tab-item> <Signup></Signup> </v-tab-item>
        </v-tabs>

        <!-- <v-btn >
          Hide Overlay
        </v-btn> -->
      </v-overlay>
    </v-card>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer class="grey lighten-3" color="light grey">
      <v-col class="text-center blue--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>GenieCook</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

import Login from "@/components/Login";
import Signup from '@/components/Signup.vue';

export default {
  name: "App",
  components: {
    Login,
    Signup
  },
  data() {
    return {
      absolute: false,
      opacity: 0.46,

      zIndex: 5,
      overlay: false,
      dialog: true,
      tab: 0,
      tabs: [
        { name: "Login", icon: "mdi-account" },
        { name: "Register", icon: "mdi-account-outline" },
      ],
    };
  },
};
</script>
