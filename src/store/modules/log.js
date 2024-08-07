const state = () => ({
  workoutLogs: [
    {
      logId: 'log1',
      workoutId: 'wo1',
      date: '2024-08-07',
      exercises: [
        {
          name: 'Incline DB Press',
          sets: [
            { weight: 50, reps: 8 },
            { weight: 55, reps: 7 },
            { weight: 60, reps: 6 },
          ],
        },
        {
          name: 'Dips',
          sets: [
            { weight: 0, reps: 12 },
            { weight: 10, reps: 10 },
            { weight: 15, reps: 8 },
          ],
        },
        {
          name: 'Chest Flys',
          sets: [
            { weight: 20, reps: 12 },
            { weight: 20, reps: 10 },
            { weight: 25, reps: 8 },
          ],
        },
        {
          name: 'Tricep Pushdown',
          sets: [
            { weight: 30, reps: 12 },
            { weight: 35, reps: 10 },
            { weight: 40, reps: 8 },
          ],
        },
      ],
    },
  ],
});

export default {
  namespaced: true,
  state,
};
