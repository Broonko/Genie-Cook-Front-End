<template>
  <v-app>
    <v-app-bar
      :src="require('@/assets/Fondo-header.png')"
      color="blue lighten-1"
      absolute
      elevate-on-scroll
      shrink-on-scroll
      app
    >
      <v-btn icon dark class="my-auto ml-1" to="/">
        <v-icon large> mdi-home </v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-layout class="mx-0 px-0" align-content-center>
        <v-img width="15" src=""> </v-img>
      </v-layout>
      <v-tabs justify="center">
        <!-- <v-spacer></v-spacer>
        <v-btn dark text depressed class="tabs" to="/Tips">
          Tips & Ideas
        </v-btn>
        <v-spacer></v-spacer> -->

        <v-spacer></v-spacer>
      </v-tabs>

      <v-spacer></v-spacer>

      <div v-if="!token" class="my-auto">
        <v-btn text @click="overlay = !overlay">Login</v-btn>
      </div>
      <div v-else class="my-auto">
        <v-btn dark text x-large fab to="/Profile">
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
      <router-view class="grey lighten-3"></router-view>
    </v-main>

    <v-footer class="grey lighten-3" color="black">
      <!-- <v-col class="text-center white-text" cols="12"> -->
      <v-row class="align-center">
        <v-col class="pa-0 text-right">
          <v-icon large>mdi-email</v-icon>
        </v-col>
        <v-col cols="6">
          <v-text-field
            dense
            v-model="message2"
            label="Newsletter"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="3" class="footer pa-0">
          {{ new Date().getFullYear() }}—GenieCook
        </v-col>
        <v-col class="pa-0">
          <v-icon x-small>mdi-copyright</v-icon>
        </v-col>
      </v-row>
      <!-- </v-col> -->
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
.footer {
  font-size: 12px;
}
.tabs {
  margin: auto;
  border-radius: 20px;
}
.logo {
  display: flex;
  margin-top: 10px;
}
</style>
