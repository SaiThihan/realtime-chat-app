<template>
  <div class="navbar">
    <span class="navbar-title">Welcome to Chatroom</span>
    <div class="user-info">Logged in as {{ user.email }}</div>
    <button class="logout-button" @click="handleClick">Logout</button>
  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";

//firebase user
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

export default {
  setup() {
    const { user } = getUser();
    const router = useRouter();

    const handleClick = () => {
      signOut(auth)
      router.push('/')
    };

    return { user, handleClick };
  },
};
</script>

<style scoped>
/* Navbar */
.navbar {
  background-color: #112d4e;
  padding: 16px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-title {
  font-size: 24px;
  font-weight: bold;
}

.user-info {
  font-size: 14px;
  opacity: 0.9;
}

.logout-button {
  background-color: #3f72af;
  border: none;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #5a9ad6;
}
</style>
