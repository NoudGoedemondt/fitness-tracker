<template>
  <div class="app">
    <div class="container">
      <calendar-month @date-selected="setSelectedDate" />
    </div>
    <div class="container">
      <add-workout />
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import CalendarMonth from './components/calendar/CalendarMonth.vue';
import AddWorkout from './components/wo-manager/AddWorkout.vue';

export default {
  components: {
    CalendarMonth,
    AddWorkout,
  },

  data() {
    return {
      selectedDate: {
        date: dayjs().format('YYYY-MM-DD'),
      },
      loggedWorkouts: [],
    };
  },

  provide() {
    return {
      selectedDate: this.selectedDate,
    };
  },

  methods: {
    setSelectedDate(date) {
      this.selectedDate.date = date;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  font-family: sans-serif;
  font-weight: 100;
  --grey-100: #e4e9f0;
  --grey-200: #cfd7e3;
  --grey-300: #b5c0cd;
  --grey-800: #3e4e63;
  --grid-gap: 1px;
  --day-label-size: 20px;
}

ol,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.container {
  margin: 1rem;
}
</style>
