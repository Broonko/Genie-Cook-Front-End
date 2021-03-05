import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search.vue";
import Home from "../views/Home.vue";
<<<<<<< HEAD
import Signup from  "../views/Signup.vue";
=======
import Profile from "../views/Profile.vue";
import Tips from "../views/Tips.vue";
>>>>>>> 487a76aad608a1085f2657a740fb9608c97aa4de

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search/:search",
    name: "Search",
    component: Search,
    props: true,
  },
  {
<<<<<<< HEAD
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
=======
    path: "/profile",
    name: "Profile",
    component: Profile,
    
  },
  {
    path: "/tips",
    name: "Tips",
    component: Tips,
    
  },
>>>>>>> 487a76aad608a1085f2657a740fb9608c97aa4de
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
