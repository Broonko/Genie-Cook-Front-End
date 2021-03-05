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
        

        <v-tabs justify="center" >
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
        </div>

        <!--<v-btn>
              <v-icon class="blue--text">mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon class="blue--text">mdi-dots-vertical</v-icon>
            </v-btn>-->
      </v-toolbar>
      <v-overlay
        :absolute="absolute"
        :opacity="opacity"
        :value="overlay"
        :z-index="zIndex"
      >
        <v-btn color="blue lighten-2" @click="overlay = false">
          Hide Overlay
        </v-btn>
      </v-overlay>
    </v-card>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer class="grey lighten-3" color="light grey">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>GenieCook</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      absolute: false,
      opacity: 0.46,
      overlay: false,
      zIndex: 5,
    };
  },
};
</script>
