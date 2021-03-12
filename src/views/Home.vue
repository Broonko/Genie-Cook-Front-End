<template>
  <div class="backgr">
    <v-img src="../assets/genioFondo.png" no-repeat></v-img>

    <v-container class="imgBack">
      <v-row justify="center">
        <v-col cols="12" sm="4" md="4">
          <div>
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
              color="teal lighten-1"
              dark
              rounded
              block
              :to="{ name: 'Recipes', params: { search: search } }"
              >search</v-btn
            >
          </div>
          <br />
          <br />
          <v-row class=" d-flex" align="center" height="auto" width="auto">
            <v-carousel>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-row>
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
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.backgr {
  filter: hue-rotate(20deg);
  display: flex;
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: brightness(85%);
}
.imgBack {
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
//   background: url("../assets/genio1.png") no-repeat;
//   background-size: 100%;
//   width: auto;
//   display: flex;
//
</style>
