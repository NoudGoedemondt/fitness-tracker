<template>
  <div class="calendar">
    <div class="controls">
      {{ currentDate }}
    </div>

    <calendar-weekdays />

    <div class="days-grid">
      <div class="item" v-for="day in currentMonthDays" :key="day">
        {{ day }}
      </div>
    </div>
  </div>

  <h1>{{ now }}</h1>
  <h1>{{ currentMonthDays }}</h1>
  <h1>{{ previousMonthDays }}</h1>
  <h1>{{ nextMonthDays }}</h1>
</template>

<script setup>
import { computed } from 'vue';
import dayjs from 'dayjs';
import CalendarWeekdays from './CalendarWeekdays.vue';

const currentDate = computed(() => dayjs().format('DD-MM-YYYY'));

const now = dayjs();
const currentMonthDays = dayjs(now).daysInMonth();
const previousMonthDays = dayjs(now).subtract(1, 'month').daysInMonth();
const nextMonthDays = dayjs(now).add(1, 'month').daysInMonth();
</script>

<style scoped>
.calendar {
  max-width: 960px;
  margin: 50px auto;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
}

.item {
  border: 1px solid var(--grey-300);
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
}
</style>
