<template>
  <li class="day">
    <a
      @click="emit('daySelected', props.day)"
      :class="{ selected: isSelected }"
      >{{ label }}</a
    >
    <ul>
      <li></li>
    </ul>
  </li>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import dayjs from 'dayjs';

const props = defineProps(['day', 'activeDate']);
const emit = defineEmits(['daySelected']);

const label = computed(() => dayjs(props.day).format('D'));

const isSelected = computed(() => props.day === props.activeDate);
</script>

<style scoped>
.day {
  margin: 1px;
  padding: 4px;
  border: 1px solid var(--grey-300);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: background-color 0.2s ease-in;
}

.day:hover a {
  background-color: var(--grey-100);
}

a:active {
  background-color: var(--grey-800);
}

.selected {
  background-color: var(--grey-100);
}
</style>
