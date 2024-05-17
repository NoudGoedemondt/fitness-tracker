<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'CalendarItem',
};
</script>

<style scoped>
li {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem;
  min-width: 20px;
  min-height: auto;
  text-align: center;
}
</style>
