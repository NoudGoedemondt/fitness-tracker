<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'BaseListItem',
};
</script>

<style scoped>
li {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 1rem 0;
}
</style>
