<template>
  <div class="backgr">
    <v-img src="../assets/genieMove.gif" no-repeat></v-img>

    <v-container class="imgBack">
      <v-row justify="center">
        <v-col cols="12" sm="6" md="8">
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
          <v-btn
            color="teal lighten-3"
            rounded
            block
            :to="{ name: 'Recipes', params: { search: search } }"
            >search</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.backgr {
  filter: hue-rotate(10deg);
  position: relative;
  display: flex;
  height: 70%;
  width: 50%;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.imgBack {
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translate(-50%, -50%);
}
//   background: url("../assets/genio1.png") no-repeat;
//   background-size: 100%;
//   width: auto;
//   display: flex;
//
</style>
