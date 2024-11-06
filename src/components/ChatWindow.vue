<template>
  <div>
    <div class="messages" ref="newMessages" id="chatMessages">
      <div
        class="message-container"
        v-for="message in formattedMessage"
        :key="message.id"
      >
        <div class="timestamp">{{ message.createAt }} ago</div>
        <div class="message-content">
          <span class="username">{{ message.userName }}:</span>
          <span>{{ message.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, nextTick, watch, ref } from "vue";

export default {
  setup() {
    const { documents: messages } = getCollection("messages");

    const formattedMessage = computed(() => {
      return (messages.value || []).map((message) => {
        let time;
        try {
          time = formatDistanceToNow(message.createAt.toDate());
        } catch (e) {
          time = "Invalid date";
        }
        return { ...message, createAt: time };
      });
    });

    // Auto scroll to the bottom message
    const newMessages = ref(null);

    watch(messages, async () => {
      await nextTick();
      if (newMessages.value) {
        newMessages.value.scrollTop = newMessages.value.scrollHeight;
      }
    });

    return { messages, formattedMessage, newMessages };
  },
};
</script>

<style scoped>
/* Messages Container */
.messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 400px;
}

/* Individual Message */
.message-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.timestamp {
  font-size: 12px;
  color: #3f72af;
  margin-bottom: 4px;
}

.message-content {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #dbe2ef;
  color: #112d4e;
  padding: 8px 12px;
  border-radius: 16px;
  max-width: fit-content;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 1.4;
}

.username {
  font-weight: bold;
}

</style>
