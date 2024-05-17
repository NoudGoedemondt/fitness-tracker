<template>
  <div class="container">
    <ul>
      <calendar-item v-for="date in calendarDates" :key="date">{{
        date
      }}</calendar-item>
    </ul>
  </div>
</template>

<script>
import CalendarItem from './CalendarItem.vue';
import dayjs from 'dayjs';

export default {
  name: 'CalendarList',
  components: {
    CalendarItem,
  },
  data() {
    return {
      calendarDates: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    };
  },
  mounted() {
    console.log(dayjs());
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}
</style>
