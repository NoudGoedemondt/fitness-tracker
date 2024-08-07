<template>
  <div class="calendar">
    <div class="header">
      <h2>{{ fullMonthName }}</h2>
    </div>

    <calendar-weekdays />

    <ol class="days-grid">
      <div v-for="n in emptyDays" :key="n"></div>
      <calendar-day-item v-for="day in days" :key="day" :day="day" />
    </ol>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import CalendarWeekdays from './CalendarWeekdays.vue';
import CalendarDayItem from './CalendarDayItem.vue';

dayjs.extend(weekday);

const selectedDate = ref(dayjs());

const year = computed(() => dayjs(selectedDate.value).format('YYYY'));

const month = computed(() => dayjs(selectedDate.value).format('MM'));

const fullMonthName = computed(() => dayjs(selectedDate.value).format('MMMM'));

const numberOfDaysInMonth = computed(() =>
  dayjs(selectedDate.value).daysInMonth()
);

const days = computed(() =>
  [...Array(numberOfDaysInMonth.value)].map(
    (_, index) => `${year.value}-${month.value}-${index + 1}`
  )
);

const emptyDays = computed(() => dayjs(selectedDate.value).weekday());

console.log(days.value);
</script>

<style scoped>
.calendar {
  max-width: 960px;
  margin: 50px auto;
  padding: 1rem;
  border: 1px solid var(--grey-300);
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
}
</style>
