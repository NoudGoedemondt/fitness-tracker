<template>
  <div class="add-wo">
    <button @click="showModal = !showModal">Add Workout</button>
    <add-workout-modal v-model="showModal" />
  </div>
</template>

<script setup>
import AddWorkoutModal from './AddWorkoutModal.vue';

import { ref } from 'vue';

const showModal = ref(false);
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
