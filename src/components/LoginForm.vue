<template>
  <form @submit.prevent="handleSubmit" class="login-form">
    <h2>Login</h2>

    <label for="email">Email</label>
    <input type="email" name="email" v-model="email" required />

    <label for="password">Password</label>
    <input type="password" name="password" v-model="password" required />

    <span v-if="error" class="error">{{ error }}</span>
    <button type="submit">Login</button>
    <span @click="handleSignup">Don't have an account? Register here</span>
  </form>
</template>

<script>
import { ref } from "vue";

import useLogin from "@/composables/useLogin";
import { useRouter } from "vue-router";

export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");

    const { login, error } = useLogin();
    const router = useRouter();

    const handleSubmit = async () => {
      await login(email.value, password.value);

      if (!error.value) {
        router.push("/chatroom");
      }
      
    };

    const handleSignup = () => {
      context.emit("login");
    };

    return { email, password, handleSubmit, handleSignup, error };
  },
};
</script>

<style scoped>
/* Form Styling */
.login-form {
  width: 100%;
  max-width: 400px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(17, 45, 78, 0.2);
  margin: 0 auto;
  text-align: center;
}

.login-form h2 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #112d4e;
}

/* Label Styling */
.login-form label {
  display: block;
  text-align: left;
  font-weight: bold;
  margin-bottom: 8px;
  color: #112d4e;
}

/* Input Field Styling */
.login-form input {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #dbe2ef;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  color: #112d4e;
  background-color: #f7f9fc;
  transition: border-color 0.3s;
}

.login-form input:focus {
  border-color: #112d4e;
  box-shadow: 0 0 5px rgba(17, 45, 78, 0.3);
}

/* Button Styling */
.login-form button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background-color: #112d4e;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;
}

.login-form button:hover {
  background-color: #3f72af;
}

span {
  font-size: 14px;
  display: inline-block;
  padding-bottom: 10px;
}

.error {
  color: #f95454;
  font-size: 14px;
  margin: 3px 0;
}
</style>
