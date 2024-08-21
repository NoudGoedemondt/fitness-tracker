<template>
  <div class="form-repeater">
    <div v-for="(input, index) in inputs" :key="index" class="form-group">
      <b>Set {{ index + 1 }}</b>
      <input
        type="number"
        v-model="input.weight"
        placeholder="Weight (kg)"
        min="0"
      />
      <input type="number" v-model="input.reps" placeholder="Reps" min="0" />
      <button type="button" @click="removeInput(index)">Remove</button>
    </div>
    <button type="button" @click="addInput">Add Set</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputs = ref([{ reps: '', weight: '' }]);

const addInput = () => {
  inputs.value.push({ reps: '', weight: '' });
};

const removeInput = (index) => {
  inputs.value.splice(index, 1);
};
</script>

<style scoped>
.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

b {
  margin-right: 10px;
}

input[type='number'] {
  flex: 1;
  padding: 0.5rem;
  margin-right: 10px;
}

button {
  padding: 0.5rem;
  cursor: pointer;
}

button[type='button'] {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}

button[type='button']:hover {
  background-color: #0056b3;
}
</style>
