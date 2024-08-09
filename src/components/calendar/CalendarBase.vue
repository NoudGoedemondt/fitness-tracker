<template>
  <div class="calendar">
    <div class="header">
      <h2>{{ fullMonthYear }}</h2>

      <calendar-date-controller
        :currentSelectedDate="selectedDate"
        @newDateSelected="setNewSelectedDate"
      />
    </div>

    <calendar-weekdays />

    <ol class="days-grid">
      <li class="empty" v-for="n in emptyDays" :key="n"></li>
      <calendar-day-item v-for="day in days" :key="day" :day="day" />
    </ol>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import dayjs from 'dayjs';

import CalendarDateController from './CalendarDateController.vue';
import CalendarWeekdays from './CalendarWeekdays.vue';
import CalendarDayItem from './CalendarDayItem.vue';

const selectedDate = ref(dayjs());

const year = computed(() => Number(dayjs(selectedDate.value).format('YYYY')));

const month = computed(() => Number(dayjs(selectedDate.value).format('MM')));

const fullMonthYear = computed(() =>
  dayjs(selectedDate.value).format('MMMM YYYY')
);

const numberOfDaysInMonth = computed(() =>
  dayjs(selectedDate.value).daysInMonth()
);

const days = computed(() =>
  [...Array(numberOfDaysInMonth.value)].map(
    (_, index) => `${year.value}-${month.value}-${index + 1}`
  )
);

const emptyDays = computed(() => {
  const WeekdayOfSelectedMonth = dayjs(selectedDate.value)
    .startOf('month')
    .day();
  return WeekdayOfSelectedMonth === 0 ? 6 : WeekdayOfSelectedMonth - 1;
});

const setNewSelectedDate = (newSelectedDate) => {
  selectedDate.value = newSelectedDate;
};
</script>

<style scoped>
.header h2 {
  text-align: center;
  margin: 0 0 1rem;
}

.calendar {
  max-width: 960px;
  margin: 50px auto;
  padding: 1rem;
  border: 1px solid var(--grey-300);
  border-radius: 12px;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
}
</style>
