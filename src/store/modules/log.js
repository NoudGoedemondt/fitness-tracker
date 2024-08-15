const state = () => ({
  activeDate: null,
  workoutLogs: [
    // Week 1
    {
      logId: 'log1',
      workoutId: 'wo1',
      workoutName: 'Push',
      date: '2024-8-5',
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
    {
      logId: 'log2',
      workoutId: 'wo2',
      workoutName: 'Pull',
      date: '2024-8-7',
      exercises: [
        {
          name: 'Barbell Row',
          sets: [
            { weight: 80, reps: 10 },
            { weight: 85, reps: 8 },
            { weight: 90, reps: 6 },
          ],
        },
        {
          name: 'Lat Pulldown',
          sets: [
            { weight: 60, reps: 12 },
            { weight: 65, reps: 10 },
            { weight: 70, reps: 8 },
          ],
        },
        {
          name: 'Cable Row',
          sets: [
            { weight: 50, reps: 12 },
            { weight: 55, reps: 10 },
            { weight: 60, reps: 8 },
          ],
        },
        {
          name: 'Hammer Curls',
          sets: [
            { weight: 20, reps: 12 },
            { weight: 25, reps: 10 },
            { weight: 30, reps: 8 },
          ],
        },
      ],
    },
    {
      logId: 'log3',
      workoutId: 'wo3',
      workoutName: 'Legs',
      date: '2024-8-9',
      exercises: [
        {
          name: 'Barbell Squats',
          sets: [
            { weight: 100, reps: 10 },
            { weight: 105, reps: 8 },
            { weight: 110, reps: 6 },
          ],
        },
        {
          name: 'Calf Raises',
          sets: [
            { weight: 60, reps: 15 },
            { weight: 65, reps: 12 },
            { weight: 70, reps: 10 },
          ],
        },
        {
          name: 'Leg Extensions',
          sets: [
            { weight: 50, reps: 12 },
            { weight: 55, reps: 10 },
            { weight: 60, reps: 8 },
          ],
        },
        {
          name: 'Leg Curls',
          sets: [
            { weight: 40, reps: 12 },
            { weight: 45, reps: 10 },
            { weight: 50, reps: 8 },
          ],
        },
      ],
    },

    // Week 2
    {
      logId: 'log4',
      workoutId: 'wo1',
      workoutName: 'Push',
      date: '2024-8-12',
      exercises: [
        {
          name: 'Incline DB Press',
          sets: [
            { weight: 55, reps: 8 },
            { weight: 60, reps: 7 },
            { weight: 65, reps: 6 },
          ],
        },
        {
          name: 'Dips',
          sets: [
            { weight: 10, reps: 12 },
            { weight: 15, reps: 10 },
            { weight: 20, reps: 8 },
          ],
        },
        {
          name: 'Chest Flys',
          sets: [
            { weight: 25, reps: 12 },
            { weight: 30, reps: 10 },
            { weight: 35, reps: 8 },
          ],
        },
        {
          name: 'Tricep Pushdown',
          sets: [
            { weight: 35, reps: 12 },
            { weight: 40, reps: 10 },
            { weight: 45, reps: 8 },
          ],
        },
      ],
    },
    {
      logId: 'log5',
      workoutId: 'wo2',
      workoutName: 'Pull',
      date: '2024-8-14',
      exercises: [
        {
          name: 'Barbell Row',
          sets: [
            { weight: 85, reps: 10 },
            { weight: 90, reps: 8 },
            { weight: 95, reps: 6 },
          ],
        },
        {
          name: 'Lat Pulldown',
          sets: [
            { weight: 65, reps: 12 },
            { weight: 70, reps: 10 },
            { weight: 75, reps: 8 },
          ],
        },
        {
          name: 'Cable Row',
          sets: [
            { weight: 55, reps: 12 },
            { weight: 60, reps: 10 },
            { weight: 65, reps: 8 },
          ],
        },
        {
          name: 'Hammer Curls',
          sets: [
            { weight: 25, reps: 12 },
            { weight: 30, reps: 10 },
            { weight: 35, reps: 8 },
          ],
        },
      ],
    },
    {
      logId: 'log6',
      workoutId: 'wo3',
      workoutName: 'Legs',
      date: '2024-8-16',
      exercises: [
        {
          name: 'Barbell Squats',
          sets: [
            { weight: 105, reps: 10 },
            { weight: 110, reps: 8 },
            { weight: 115, reps: 6 },
          ],
        },
        {
          name: 'Calf Raises',
          sets: [
            { weight: 65, reps: 15 },
            { weight: 70, reps: 12 },
            { weight: 75, reps: 10 },
          ],
        },
        {
          name: 'Leg Extensions',
          sets: [
            { weight: 55, reps: 12 },
            { weight: 60, reps: 10 },
            { weight: 65, reps: 8 },
          ],
        },
        {
          name: 'Leg Curls',
          sets: [
            { weight: 45, reps: 12 },
            { weight: 50, reps: 10 },
            { weight: 55, reps: 8 },
          ],
        },
      ],
    },

    // Week 3
    {
      logId: 'log7',
      workoutId: 'wo1',
      workoutName: 'Push',
      date: '2024-8-19',
      exercises: [
        {
          name: 'Incline DB Press',
          sets: [
            { weight: 60, reps: 8 },
            { weight: 65, reps: 7 },
            { weight: 70, reps: 6 },
          ],
        },
        {
          name: 'Dips',
          sets: [
            { weight: 15, reps: 12 },
            { weight: 20, reps: 10 },
            { weight: 25, reps: 8 },
          ],
        },
        {
          name: 'Chest Flys',
          sets: [
            { weight: 30, reps: 12 },
            { weight: 35, reps: 10 },
            { weight: 40, reps: 8 },
          ],
        },
        {
          name: 'Tricep Pushdown',
          sets: [
            { weight: 40, reps: 12 },
            { weight: 45, reps: 10 },
            { weight: 50, reps: 8 },
          ],
        },
      ],
    },
    {
      logId: 'log8',
      workoutId: 'wo2',
      workoutName: 'Pull',
      date: '2024-8-21',
      exercises: [
        {
          name: 'Barbell Row',
          sets: [
            { weight: 90, reps: 10 },
            { weight: 95, reps: 8 },
            { weight: 100, reps: 6 },
          ],
        },
        {
          name: 'Lat Pulldown',
          sets: [
            { weight: 70, reps: 12 },
            { weight: 75, reps: 10 },
            { weight: 80, reps: 8 },
          ],
        },
        {
          name: 'Cable Row',
          sets: [
            { weight: 60, reps: 12 },
            { weight: 65, reps: 10 },
            { weight: 70, reps: 8 },
          ],
        },
        {
          name: 'Hammer Curls',
          sets: [
            { weight: 30, reps: 12 },
            { weight: 35, reps: 10 },
            { weight: 40, reps: 8 },
          ],
        },
      ],
    },
    {
      logId: 'log9',
      workoutId: 'wo3',
      workoutName: 'Legs',
      date: '2024-8-23',
      exercises: [
        {
          name: 'Barbell Squats',
          sets: [
            { weight: 110, reps: 10 },
            { weight: 115, reps: 8 },
            { weight: 120, reps: 6 },
          ],
        },
        {
          name: 'Calf Raises',
          sets: [
            { weight: 70, reps: 15 },
            { weight: 75, reps: 12 },
            { weight: 80, reps: 10 },
          ],
        },
        {
          name: 'Leg Extensions',
          sets: [
            { weight: 60, reps: 12 },
            { weight: 65, reps: 10 },
            { weight: 70, reps: 8 },
          ],
        },
        {
          name: 'Leg Curls',
          sets: [
            { weight: 50, reps: 12 },
            { weight: 55, reps: 10 },
            { weight: 60, reps: 8 },
          ],
        },
      ],
    },
  ],
});

const getters = {
  getWorkoutsByDate: (state) => (date) => {
    return state.workoutLogs.filter((log) => log.date === date);
  },
  getWorkoutsByActiveDate: (state) => {
    return state.workoutLogs.filter((log) => log.date === state.activeDate);
  },
};

const actions = {
  setNewActiveDate({ commit }, newActiveDate) {
    commit('setActiveDate', newActiveDate);
  },
};

const mutations = {
  setActiveDate(state, newActiveDate) {
    state.activeDate = newActiveDate;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
