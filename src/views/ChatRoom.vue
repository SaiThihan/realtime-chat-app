<template>
  <!-- Chatroom Container -->
  <div class="chatroom-container" >
    <!-- Navbar -->
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ChatWindow from "@/components/ChatWindow.vue";
import NewChatForm from "@/components/NewChatForm.vue";

import getUser from "@/composables/getUser";

//firebase import
import { auth } from "@/firebase/config";

export default {
  components: {
    Navbar,
    ChatWindow,
    NewChatForm,
  },
  setup() {
    const user = auth.currentUser

    return { user };
  },
};
</script>

<style>
.chatroom-container {
  width: 90%;
  max-width: 1000px; 
  margin: 0 auto; 
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(17, 45, 78, 0.15);
  background-color: #ffffff;
  
}

/* Medium screens (tablets) */
@media (min-width: 768px) {
  .chatroom-container {
    width: 80%;
  }
}

@media (min-width: 1024px) {
  .chatroom-container {
    width: 1000px;
  }
}

</style>
