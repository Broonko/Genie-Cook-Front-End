<template>
  <v-app>
    <v-main>
      <v-card color="grey-4" flat height="200px" tile>
        <v-toolbar dense dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Title</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>

      <v-card>
        <v-card-text>
          <v-text-field label="search"> </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click="getRecipes()">search </v-btn>
        </v-card-actions>
      </v-card>
    </v-main>

    <v-footer padless dark>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import recipesService from "@/services/recipesService";
export default {
  name: "App",

  components: {},

  data() {
    return {
      searchIngredients: "",
      searchclick: false,
    };
  },
  methods: {
    getRecipes: function() {
      recipesService;
    },
  },
};
</script>
