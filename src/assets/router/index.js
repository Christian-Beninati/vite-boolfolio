import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import DetailPage from "../pages/DetailPage.vue";
import TypeProjects from "../pages/TypeProjects.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
     path: "/", 
     name: "home", 
     component: HomePage 
    },
    { 
     path: "/projects/:id", 
     name: "detail-page", 
     component: DetailPage 
    },
    {
     path: "/types/:id/projects",
     name: "typeProject-page",
     component: TypeProjects,
    },
],
});

export { router };