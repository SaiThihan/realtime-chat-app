<template>
  <form @submit.prevent="handleSubmit" class="signup-form">
    <h2>Sign Up</h2>

    <label for="username">Username</label>
    <input type="text" name="username" v-model="username" required />

    <label for="email">Email</label>
    <input type="email" name="email" v-model="email" required />

    <label for="password">Password</label>
    <input type="password" name="password" v-model="password" required />

    <span v-if="error" class="error">{{ error }}</span>

    <button type="submit">Sign Up</button>
    <span @click="handleLogin">Already have an account? Login here</span>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useSignup from "@/composables/useSignup";

export default {
  setup(props,context) {
    const username = ref("");
    const email = ref("");
    const password = ref("");

    const { error, signup } = useSignup();
    const router = useRouter();

    const handleSubmit = async () => {
      await signup(username.value, email.value, password.value);

      if (!error.value) {
        console.log("signed up successfully");
        router.push("/chatroom");
      }
    };

    const handleLogin = ()=>{
      context.emit('signup')
    }

    return { username, email, password, handleSubmit, error ,handleLogin};
  },
};
</script>

<style scoped>
/* Form Styling */
.signup-form {
  width: 100%;
  max-width: 400px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(17, 45, 78, 0.2);
  margin: 0 auto; /* Centering the form */
  text-align: center; /* Centering text */
}

.signup-form h2 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #112d4e;
}

/* Label Styling */
.signup-form label {
  display: block;
  text-align: left;
  font-weight: bold;
  margin-bottom: 8px;
  color: #112d4e;
}

/* Input Field Styling */
.signup-form input {
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

.signup-form input:focus {
  border-color: #112d4e;
  box-shadow: 0 0 5px rgba(17, 45, 78, 0.3);
}

/* Button Styling */
.signup-form button {
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

.signup-form button:hover {
  background-color: #3f72af;
}

span {
  font-size: 14px;
}

.error {
  color: #F95454;
  font-size: 14px;
  margin: 3px 0;
}
</style>
