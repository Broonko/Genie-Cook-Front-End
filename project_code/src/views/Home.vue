<template>
  <v-container>
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "fruit",
    };
  },
};
</script>

<style lang="scss" scoped></style>
