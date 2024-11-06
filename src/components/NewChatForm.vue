<template>
  <!-- Chat Input -->
  <form class="chat-input-container" @submit.prevent="handleSubmit">
    <input
      type="text"
      class="chat-input"
      v-model="message"
      id="chatInput"
      placeholder="Type a message..."
      required
    />
    <button class="send-button">Send</button>
  </form>
</template>

<script>
import { ref } from "vue";
//firebase import
import { db } from "@/firebase/config";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import getUser from "@/composables/getUser";

export default {
  setup() {
    const message = ref("");
    const { user } = getUser();

    const handleSubmit = async () => {
      const colRef = collection(db, "messages");

      await addDoc(colRef, {
        message: message.value,
        userName: user.value.displayName,
        createAt: Timestamp.now(),
      });

      //reset the form
      message.value = "";
    };

    return { message, handleSubmit };
  },
};
</script>

<style scoped>
/* Chat Input */
.chat-input-container {
  display: flex;
  padding: 12px;
  background-color: #f0f4fa;
  border-top: 1px solid #dbe2ef;
}

.chat-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #dbe2ef;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
}

.send-button {
  margin-left: 8px;
  padding: 10px 14px;
  background-color: #112d4e;
  border: none;
  color: #ffffff;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: #3f72af;
}
</style>
