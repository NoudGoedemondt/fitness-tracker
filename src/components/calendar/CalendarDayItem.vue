<template>
  <li class="day">
    <a>{{ label }}</a>
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
  padding: 1rem;
  text-align: center;
  font-weight: bold;
}
</style>
