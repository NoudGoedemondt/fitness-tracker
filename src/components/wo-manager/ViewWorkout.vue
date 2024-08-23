<template>
  <div class="view-wo">
    <div
      v-for="workout in workoutsOnDay"
      :key="workout.logId"
      class="workout-block"
    >
      <h3>{{ workout.workoutName }}</h3>
      <div
        v-for="(exercise, eIndex) in workout.exercises"
        :key="eIndex"
        class="exercise-block"
      >
        <h4>Exercise {{ eIndex + 1 }} - {{ exercise.name }}</h4>
        <ol class="sets-list">
          <li v-for="(set, sIndex) in exercise.sets" :key="sIndex">
            Set {{ sIndex + 1 }}: {{ set.reps }} reps × {{ set.weight }} kg
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

const workoutsOnDay = computed(() => store.getters['log/getLogsByActiveDate']);
</script>

<style scoped>
.view-wo {
  max-width: 960px;
  margin: 50px auto;
  padding: 1rem;
  border: 1px solid var(--grey-300);
  border-radius: 12px;
}

.workout-block {
  margin-bottom: 2rem;
}

.exercise-block {
  margin-bottom: 1.5rem;
  padding-left: 1rem;
}

.sets-list {
  padding-left: 1.5rem;
  margin-top: 0.5rem;
}

.sets-list li {
  margin-bottom: 0.5rem;
}
</style>
