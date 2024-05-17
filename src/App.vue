<template>
  <the-header></the-header>
  <calendar-list></calendar-list>
</template>

<script>
import TheHeader from './components/UI/TheHeader.vue';
import CalendarList from './components/calendar/CalendarList.vue';

export default {
  components: {
    TheHeader,
    CalendarList,
  },
  data() {
    return {};
  },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
