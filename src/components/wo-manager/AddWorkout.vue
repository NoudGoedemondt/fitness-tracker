<template>
  <div class="add-wo">
    <div v-for="(workout, index) in workouts" :key="index">
      {{ workout.name }}
    </div>
    <set-input-repeater exercise="Incline DB Press" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import SetInputRepeater from './SetInputRepeater.vue';

const store = useStore();

const workouts = computed(() => store.state.routine.workouts);
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
