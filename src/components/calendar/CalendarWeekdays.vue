<template>
  <ol class="weekdays">
    <li v-for="day in weekdays" :key="day">{{ day }}</li>
  </ol>
</template>

<script setup>
const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
</script>

<style scoped>
.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  padding: 1rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px var(--grey-300) solid;
}
</style>
