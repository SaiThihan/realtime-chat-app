import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChatRoom from "@/views/ChatRoom.vue";

import { auth } from "@/firebase/config";

//route guard
const checkAuth = (to, from, next) => {
  const user = auth.currentUser;

  if (to.name == "Chatroom" && !user) {
    next({ name: "home" });
  } else if (to.name === "home" && user) {
    next({ name: "Chatroom" });
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: checkAuth,
    },
    {
      path: "/chatroom",
      name: "Chatroom",
      component: ChatRoom,
      beforeEnter: checkAuth,
    },
  ],
});

export default router;
