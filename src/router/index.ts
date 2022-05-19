import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import SampleRateCal from "@/views/Sample/index.vue";
import SampleCombination from "@/views/Combination/index.vue";
import MergePDF from "@/views/MergePDF/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/sample/calculation",
    name: "SampleRateCal",
    component: SampleRateCal
  },
  {
    path: "/sample/combination",
    name: "SampleCombination",
    component: SampleCombination
  },
  {
    path: "/merge/pdf",
    name: "MergePDF",
    component: MergePDF
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
