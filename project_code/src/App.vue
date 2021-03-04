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
      <v-row justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="search"
            label="search"
            placeholder="Introduce your ingredients"
            outlined
            rounded
          ></v-text-field>
          <router-link :to="{ name: 'Search', params: { search: search } }">
            <v-btn rounded block>search</v-btn>
           
          </router-link>
        </v-col>
      </v-row>
      <router-view></router-view>

      <!--<v-row>
        <v-col
          class="d-flex"
          cols="4"
          v-for="(list, idx) in recipeList"
          :key="idx"
          >{{ list.title }} id:{{ list.id }}
          <v-img
            class="d-flex"
            height="200"
            width="200"
            :src="list.image"
          ></v-img>
        </v-col>
      </v-row>-->
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

  components: {},

  data() {
    return {
      search: '',
      recipeList: [],
    };
  },
};
</script>
