<template>
  <header>
    <nav class="main-nav">
      <ul>
        <li>
          <a href="">nav link 1</a>
        </li>
        <li>
          <a href="">nav link 2</a>
        </li>
        <li>
          <a href="">nav link 3</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  border-bottom: 1px solid var(--grey-300);
}

.main-nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.main-nav li {
  margin: 0 1rem;
}

.main-nav a {
  color: #000;
  text-decoration: none;
  padding: 0.5rem;
  transition: background-color 0.2s ease-in-out;
}

.main-nav a:hover,
.main-nav a:active {
  background-color: var(--grey-200);
}
</style>
