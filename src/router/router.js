import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Category from "../components/Category.vue";
import SingleBlog from "../components/SingleBlog.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/category/:id",
    name: "category",
    component: Category,

    // children: [
    //     {
    //         path: "/:id",
    //         name: "singleBlog",
    //         component: SingleBlog,
    //     },
    //   ],
  },
  {
    path: "/blog/:id",
    name: "singleBlog",
    component: SingleBlog,
  },
//   {
//     path: "/single-blog",
//     name: "singleBlog",
//     component: SingleBlog,
//   },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});