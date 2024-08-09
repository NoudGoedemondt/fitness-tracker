<template>
  <li class="day">
    <a>{{ label }}</a>
    <ul>
      <li></li>
    </ul>
  </li>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import dayjs from 'dayjs';

const props = defineProps(['day']);

const label = computed(() => dayjs(props.day).format('D'));
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
</style>
