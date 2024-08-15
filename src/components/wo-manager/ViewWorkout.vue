<template>
  <div class="view-wo">
    <div v-for="(workout, index) in workoutsOnDay" :key="index">
      <h3>{{ workout.workoutName }}</h3>
      <div v-for="(exercise, index) in workout.exercises" :key="index">
        <h4>Exercise {{ index + 1 }} - {{ exercise.name }}</h4>
        <ol>
          <li v-for="(set, index) in exercise.sets" :key="index">
            {{ set.reps }} x {{ set.weight }}kg
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

//const activeDate = computed(() => store.state.log.activeDate);

const workoutsOnDay = computed(
  () => store.getters['log/getWorkoutsByActiveDate']
);
</script>

<style scoped>
.view-wo {
  max-width: 960px;
  margin: 50px auto;
  padding: 1rem;
  border: 1px solid var(--grey-300);
  border-radius: 12px;
}
</style>
