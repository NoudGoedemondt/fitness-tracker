<template>
  <li class="day">{{ label }}</li>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import dayjs from 'dayjs';

const props = defineProps(['day']);

const label = computed(() => dayjs(props.day).format('D'));
</script>

<style scoped>
.day {
  border: 1px solid var(--grey-300);
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
}
</style>
