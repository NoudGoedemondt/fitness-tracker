<template>
  <the-header></the-header>
  <h3>My List</h3>
  <div>
    <ul>
      <base-list-item>
        <h3>Item 1</h3>
        <p>This is the first item.</p>
      </base-list-item>
      <base-list-item>
        <h3>Item 2</h3>
        <p>This is the second item.</p>
      </base-list-item>
    </ul>
  </div>
</template>

<script>
import TheHeader from './components/UI/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {};
  },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}
</style>
