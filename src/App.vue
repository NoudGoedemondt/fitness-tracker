<template>
  <calendar-base />
  <add-workout />
  <view-workout />
</template>

<script setup>
import CalendarBase from './components/calendar/CalendarBase.vue';
import AddWorkout from './components/wo-manager/add-wo/AddWorkout.vue';
import ViewWorkout from './components/wo-manager/ViewWorkout.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
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
