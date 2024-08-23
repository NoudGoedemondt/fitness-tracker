<template>
  <div class="add-wo">
    <button @click="showWorkoutModal = !showWorkoutModal">Add Workout</button>
    <add-workout-modal v-model="showWorkoutModal" />
  </div>
</template>

<script setup>
import AddWorkoutModal from './AddWorkoutModal.vue';

import { ref } from 'vue';

const showWorkoutModal = ref(false);
</script>

<style scoped>
.add-wo {
  max-width: 960px;
  margin: 50px auto;
  padding: 1rem;
  border: 1px solid var(--grey-300);
  border-radius: 12px;
}
</style>
