<template>
  <div class="backgr">
    <v-img src="../assets/GenioGif.gif" no-repeat ></v-img>
    <v-container class="imgBack">
      <v-row justify="center">
        <v-col cols="12" sm="6" md="5">
          <v-text-field
            flat
            background-color="white"
            prepend-inner-icon="mdi-magnify"
            color="black"
            v-model="search"
            label="search"
            placeholder="Introduce your ingredients"
            outlined
            rounded
          ></v-text-field>
          <router-link :to="{ name: 'Recipes', params: { search: search } }">
            <v-btn color="blue lighten-4" rounded block>search</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.backgr {
  filter: hue-rotate(11deg);
  position: relative;
  display: flex;
  height: 98%;
  width: 70%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.imgBack {
  position: absolute;
  top: 102%;
  left: 50%;
  transform: translate(-50%, -50%);
}
//   background: url("../assets/genio1.png") no-repeat;
//   background-size: 100%;
//   width: auto;
//   display: flex;
//
</style>
