import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Blog from "../components/Blog.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});