<template>
  <div class="add-wo">
    <form-repeater />
  </div>
</template>

<script setup>
//import { computed } from 'vue';
///import { useStore } from 'vuex';

import FormRepeater from './FormRepeater.vue';

//const store = useStore();

// const workouts = computed(() => store.state.routine.workouts);
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
