// route.js
import { createRouter, createWebHistory } from "vue-router";
import User from "@/views/User.vue";
import Post from "@/views/Post.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/users/:userId",
      component: User,
      children: [
        {
          path: "posts",
          component: Post,
        },
      ],
    },

],
});
