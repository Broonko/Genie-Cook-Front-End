<template>
  <v-app>
    <v-row>
      <v-col>
        <v-card color="grey-4" flat height="200px" tile>
          <v-toolbar
            color="light grey"
            prominent
            dense
            class="grey lighten-3 blue--text"
          >
            <!--<v-icon
              class="mt-8 "
              color="blue"
              large
              dark
              v-bind="attrs"
              v-on="on"
            >
              mdi-home
            </v-icon>-->

            <v-spacer></v-spacer>

            <v-tabs justify="center">
              <v-spacer></v-spacer>
              <v-tab>E-commerce</v-tab>
              <v-tab>Tips</v-tab>

              <v-spacer></v-spacer>
            </v-tabs>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon class="blue--text">mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon class="blue--text">mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>

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
    return {};
  },
};
</script>
