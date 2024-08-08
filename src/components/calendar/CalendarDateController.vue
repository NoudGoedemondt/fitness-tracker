<template>
  <div class="date-controller">
    <button @click="selectPrev">&lt;</button>
    <button @click="selectToday">Today</button>
    <button @click="selectNext">&gt;</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import dayjs from 'dayjs';

const props = defineProps(['currentSelectedDate']);
const emits = defineEmits(['newDateSelected']);

const selectPrev = () => {
  let newSelectedDate = dayjs(props.currentSelectedDate).subtract(1, 'month');
  emits('newDateSelected', newSelectedDate);
};

const selectNext = () => {
  let newSelectedDate = dayjs(props.currentSelectedDate).add(1, 'month');
  emits('newDateSelected', newSelectedDate);
};

const selectToday = () => {
  let newSelectedDate = dayjs();
  emits('newDateSelected', newSelectedDate);
};
</script>

<style scoped>
.date-controller {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  background: none;
  color: inherit;
  border: none;
  border-radius: 5px;
  padding: 5px 8px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

button:hover {
  background-color: var(--grey-100);
}
</style>
