const state = () => ({
  routines: [
    {
      id: 'wo1',
      name: 'Push',
      exercises: ['Incline DB Press', 'Dips', 'Chest Flys', 'Tricep Pushdown'],
    },
    {
      id: 'wo2',
      name: 'Pull',
      exercises: ['Barbell Row', 'Lat Pulldown', 'Cable Row', 'Hammer Curls'],
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
});

const getters = {
  getRoutineNameById: (state) => (id) => {
    const routine = state.routines.find((routine) => routine.id === id);
    return routine ? routine.name : undefined;
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
