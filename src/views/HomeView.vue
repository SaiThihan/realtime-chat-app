<template>
  <div>
    <div v-if="isLogin">
      <LoginForm @login="toggleForm" />
    </div>
    <div v-else>
      <SignupForm @signup="toggleForm" />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";
import { ref } from "vue";

export default {
  components: { LoginForm, SignupForm },
  setup() {
    const isLogin = ref(true);

    const toggleForm = () => {
      isLogin.value = !isLogin.value; 
    };

    return { isLogin, toggleForm };
  },
};
</script>

<style scoped></style>
