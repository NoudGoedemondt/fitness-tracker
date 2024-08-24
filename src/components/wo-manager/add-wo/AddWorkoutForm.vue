<template>
  <form class="add-wo-form" @submit.prevent>
    <div class="routine-selector">
      <button
        v-for="routine in routines"
        :key="routine.id"
        @click="setSelectedRoutine(routine)"
      >
        {{ routine.name }}
      </button>
    </div>
    <div class="exercise-block" v-if="selectedRoutine">
      <div
        class="form-control"
        v-for="(exercise, index) in selectedRoutine.exercises"
        :key="index"
      >
        <p>{{ exercise }}</p>
        <set-input-repeater />
      </div>
    </div>
  </form>
</template>

<script setup>
import SetInputRepeater from './SetInputRepeater.vue';

import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const selectedRoutine = ref(null);

const routines = computed(() => store.state.routine.routines);

const setSelectedRoutine = (routine) => {
  selectedRoutine.value = routine;
};
</script>
