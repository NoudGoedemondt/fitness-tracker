<template>
  <li class="day" :class="{ selected: isSelected }">
    <p>{{ label }}</p>
    <ul>
      <li
        class="event"
        v-for="(workout, index) in routineNamesOnDay"
        :key="index"
      >
        {{ workout }}
      </li>
    </ul>
  </li>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useStore } from 'vuex';
import dayjs from 'dayjs';

const store = useStore();

const props = defineProps(['day']);

const label = computed(() => dayjs(props.day).format('D'));

const isSelected = computed(() => props.day === store.state.log.activeDate);

const routineNamesOnDay = computed(() => {
  const logsList = store.getters['log/getLogsByDate'](props.day);

  if (!logsList.length) {
    return [];
  }

  const routineNames = logsList.map((log) => {
    const routine = store.getters['routine/getRoutineById'](log.routineId);
    return routine ? routine.name : 'Unknown Routine';
  });

  return routineNames;
});
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
  color: white;
  margin: 2px;
  padding: 1px;
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
