<template>
  <v-app>
    <v-app-bar color="blue" absolute elevate-on-scroll shrink-on-scroll app>
      <v-btn icon class="my-auto ml-1" to="/">
        <v-icon large> mdi-home </v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-layout class="mx-0 px-0" align-content-center>
        <v-img width="15" src="./assets/Logo1Genio.png"> </v-img>
      </v-layout>
      <!-- <v-tabs justify="center">
        <v-spacer></v-spacer>
        <v-btn text depressed class="tabs" to="/Tips">
          Tips & Ideas
        </v-btn>
        <v-spacer></v-spacer>

        <v-spacer></v-spacer>
      </v-tabs> -->

      <v-spacer></v-spacer>

      <div v-if="!token" class="my-auto">
        <v-btn text @click="overlay = !overlay">Login</v-btn>
      </div>
      <div v-else class="my-auto">
        <v-btn text x- large fab to="/Profile">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-overlay
      :absolute="absolute"
      :opacity="opacity"
      :value="overlay"
      :z-index="zIndex"
    >
      <v-tabs
        v-model="tab"
        show-arrows
        background-color="blue darken-2 "
        icons-and-text
        dark
        grow
      >
        <v-tabs-slider color="grey darken-1"></v-tabs-slider>
        <v-tab v-for="(i, idx) in tabs" :key="idx">
          <v-icon large>{{ i.icon }}</v-icon>
          <div class="caption py-1">{{ i.name }}</div>
        </v-tab>

        <v-btn icon color="white" @click="overlay = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-tab-item> <Login></Login> </v-tab-item>
        <v-tab-item> <Signup></Signup> </v-tab-item>
      </v-tabs>

      <!-- <v-btn >
          Hide Overlay
        </v-btn> -->
    </v-overlay>

    <v-main fluid>
      <router-view class=""></router-view>
    </v-main>

    <v-footer class="grey lighten-3" color="black">
      <v-col class="text-center white-text" cols="12">
        {{ new Date().getFullYear() }} — <strong>GenieCook</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Login from "@/components/Login";
import Signup from "@/components/Signup.vue";

export default {
  name: "App",
  components: {
    Login,
    Signup
  },
  data() {
    return {
      token: localStorage.token,
      foo: "0",
      absolute: false,
      opacity: 0.46,

      zIndex: 5,
      overlay: false,
      dialog: true,
      tab: 0,
      tabs: [
        { name: "Login", icon: "mdi-account" },
        { name: "Register", icon: "mdi-account-outline" }
      ]
    };
  }
};
</script>
<style>
.tabs {
  margin: auto;
  border-radius: 20px;
}
.logo {
  display: flex;
  margin-top: 10px;
}
</style>
