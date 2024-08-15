<template>
  <li
    class="day"
    @click="emit('daySelected', props.day)"
    :class="{ selected: isSelected }"
  >
    <p>{{ label }}</p>
    <ul>
      <li class="event" v-for="(workout, index) in workoutsOnDay" :key="index">
        {{ workout.workoutName }}
      </li>
    </ul>
  </li>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import { useStore } from 'vuex';
import dayjs from 'dayjs';

const store = useStore();

const props = defineProps(['day', 'activeDate']);
const emit = defineEmits(['daySelected']);

const label = computed(() => dayjs(props.day).format('D'));

const isSelected = computed(() => props.day === props.activeDate);

const workoutsOnDay = computed(() =>
  store.getters['log/getWorkoutsByDate'](props.day)
);
</script>

<style scoped>
.day {
  margin: 1px;
  padding: 4px;
  border: 1px solid var(--grey-300);
  cursor: pointer;
  height: 4rem;
  transition: background-color 0.2s ease-in;
}

.event {
  text-align: center;
  background-color: var(--event-color-1);
  font-weight: bold;
  margin: 2px;
  border-radius: 4px;
}

p {
  margin: 0;
}

.day:hover {
  background-color: var(--grey-100);
}

.selected {
  background-color: var(--grey-100);
}
</style>
