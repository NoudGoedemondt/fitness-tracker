<template>
  <li class="day">{{ props.day }}</li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['day']);
</script>

<style scoped>
.day {
  border: 1px solid var(--grey-300);
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
}
</style>
