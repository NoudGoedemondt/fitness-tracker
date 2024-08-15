<template>
  <calendar-base />
  <view-workout />
</template>

<script setup>
import CalendarBase from './components/calendar/CalendarBase.vue';
import ViewWorkout from './components/wo-manager/ViewWorkout.vue';
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

body {
  font-family: sans-serif;
  font-weight: 100;
  --grey-100: #e4e9f0;
  --grey-200: #cfd7e3;
  --grey-300: #b5c0cd;
  --grey-800: #3e4e63;
  --event-color-1: #0b3c49;
  --event-color-2: #731963;
  --event-color-3: #256d1b;
}

ol,
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
