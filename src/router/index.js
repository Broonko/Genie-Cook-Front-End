import Vue from "vue";
import VueRouter from "vue-router";
import Recipes from "../views/Recipes.vue";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Tips from "../views/Tips.vue";
import Recipe from "../views/Recipe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/recipes/:search",
    name: "Recipes",
    component: Recipes,
    props: true
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/tips",
    name: "Tips",
    component: Tips
  },
  {
    path: "/recipe/:id",
    name: "Recipe",
    component: Recipe
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
