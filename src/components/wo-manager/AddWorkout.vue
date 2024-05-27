<template>
  <div class="modal">
    <ul>
      <li v-for="workout in workouts" :key="workout.id">
        <button>{{ workout.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workouts: [
        {
          id: 'wo1',
          name: 'Push',
          exercises: [
            'Incline DB Press',
            'Dips',
            'Chest Flys',
            'Tricep Pushdown',
          ],
        },
        {
          id: 'wo2',
          name: 'Pull',
          exercises: [
            'Barbell Row',
            'Lat Pulldown',
            'Cable Row',
            'Hammer Curls',
          ],
        },
        {
          id: 'wo3',
          name: 'Legs',
          exercises: [
            'Barbell Squats',
            'Calf Raises',
            'Leg Extensions',
            'Leg Curls',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.modal {
  padding: 1rem;
  border: solid 1px var(--grey-300);
}

button {
  margin: 5px;
}
</style>
