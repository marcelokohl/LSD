import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/home.vue";
import Login from "@/pages/login.vue";
import MainMenu from "@/pages/main.vue";
import Forgot from "@/pages/forgot.vue";
import Map from "@/pages/map.vue";
import NewPass from "@/pages/new-pass.vue";
import NewAccount from "@/pages/new-account.vue";
// import Ranking from '@/pages/ranking.vue'
import RankingMenu from "@/pages/ranking-menu.vue";
import UserProfile from "@/pages/user-profile.vue";
import UserProfileEdit from "@/pages/user-profile-edit.vue";
import Arcade from "@/pages/arcade/arcade.vue";
import Ranking from "@/pages/arcade/ranking.vue";
import Made from "@/pages/arcade/made.vue";
import Game from "@/pages/game.vue";

import store from "@/store/main";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", name: "home", component: Home },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.getters.loggedIn) {
          next({ path: "main" });
        } else {
          next()
        }
      }
    },
    {
      path: "/logout",
      name: "logout",
      beforeEnter: async (to, from, next) => {
        await store.dispatch("logout");
        next({ path: "home" });
      }
    },
    { path: "/forgot", name: "forgot", component: Forgot },
    { path: "/newpass", name: "new-pass", component: NewPass },
    { path: "/newaccount", name: "new-account", component: NewAccount },
    {
      path: "/spotify-auth/:token",
      name: "spotify-auth",
      beforeEnter: async (to, from, next) => {
        const resp = await store.dispatch("loginSpotify", to.params.token);
        if (resp.ok) {
          next({ path: "main" });
        } else {
          next()
        }
      }
    },
    {
      path: "/main",
      name: "main",
      component: MainMenu,
      meta: { requiresAuth: true },
    },
    {
      path: "/map",
      name: "map",
      component: Map,
      meta: { requiresAuth: true }
    },
    {
      path: "/ranking",
      name: "ranking",
      component: Ranking,
      meta: { requiresAuth: true }
    },
    {
      path: "/rankingmenu",
      name: "ranking-menu",
      component: RankingMenu,
      meta: { requiresAuth: true }
    },
    {
      path: "/profile",
      name: "user-profile",
      component: UserProfile,
      meta: { requiresAuth: true }
    },
    {
      path: "/edit",
      name: "user-profile-edit",
      component: UserProfileEdit,
      meta: { requiresAuth: true }
    },
    {
      path: "/arcade",
      name: "arcade",
      component: Arcade,
      meta: { requiresAuth: true }
    },
    {
      path: "/made",
      name: "made",
      component: Made,
      meta: { requiresAuth: true }
    },
    {
      path: "/game",
      name: "game",
      component: Game,
      props: true,
      meta: { requiresAuth: true }
    },
    { path: "*", redirect: { name: "home" } }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!store.getters.loggedIn) {
//       next({
//         path: "home",
//         // query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
