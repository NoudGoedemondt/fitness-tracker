<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <header class="modal-header">
        <slot name="header">
          <h3>Modal Title</h3>
        </slot>
        <button class="close-button" @click="close">✕</button>
      </header>

      <section class="modal-body">
        <slot name="body"> Default Body Content </slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer">
          <button @click="close">Close</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const visible = ref(props.modelValue);

const close = () => {
  visible.value = false;
  emit('update:modelValue', false);
};

watch(
  () => props.modelValue,
  (newVal) => {
    visible.value = newVal;
  }
);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body {
  margin-bottom: 1rem;
}

.modal-footer {
  text-align: right;
}
</style>
