<template>
  <v-app>
    <v-app-bar
      dense
      fixed
      class="headerImage"
      :src="require('@/assets/GenieHeader.png')"
      absolute
      shrink-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
      app
    >
      <v-btn icon color="#063150" class="my-auto ml-1" to="/">
        <v-icon large> mdi-home </v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="ml-6" x-large>
        <v-img src="./assets/GENIE_COOK_1.png" height="100px" width="180px" />
      </v-toolbar-side-icon>
      <v-spacer></v-spacer>

      <div v-if="!token" class="my-auto">
        <v-btn dark rounded small color="#063150" @click="overlay = !overlay"
          >Login</v-btn
        >
      </div>
      <div v-else class="my-auto">
        <v-btn color="#063150" text x-large fab to="/Profile">
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
        background-color="#063150"
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
      <router-view class="brown lighten-5"></router-view>
    </v-main>

    <v-footer color="#063150">
      <!-- <v-col class="text-center white-text" cols="12"> -->
      <v-row class="align-center">
        <v-col class="pa-0 text-right">
          <v-icon dark large>mdi-email</v-icon>
        </v-col>
        <v-col cols="6">
          <v-text-field dark dense label="Newsletter" clearable></v-text-field>
        </v-col>
        <v-col cols="3" class="footer pa-0 white--text ">
          {{ new Date().getFullYear() }}-
          <strong>GenieCook</strong>
        </v-col>
        <v-col class="pa-0">
          <v-icon dark x-small>mdi-copyright</v-icon>
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
.hearderImage {
  display: flex;
  background-position: center bottom;
  background-size: contain;
  filter: brightness(80%);
}
.footer {
  font-size: 12px;
}
.tabs {
  margin: auto;
  border-radius: 20px;
}
</style>
