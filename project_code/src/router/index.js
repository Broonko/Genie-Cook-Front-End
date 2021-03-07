import Vue from "vue";
import VueRouter from "vue-router";
import Recipes from "../views/Recipes.vue";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Tips from "../views/Tips.vue";
import RecipesOne from "../views/RecipesOne.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recipes/:search",
    name: "Recipes",
    component: Recipes,
    props: true,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/tips",
    name: "Tips",
    component: Tips,
  },
  {
    path: "/recipesone",
    name: "RecipesOne",
    component: RecipesOne,
  },
  /*{
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about"  "../views/About.vue")
  }*/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
