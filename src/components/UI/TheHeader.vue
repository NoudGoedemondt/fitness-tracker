<template>
  <header>
    <div class="container">
      <div class="logo">
        <a href="">Fitness Tracker</a>
      </div>
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
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style scoped>
header {
  width: 100vw;
  background-color: #1a237e;
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0 1rem;
}

.logo a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
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
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  transition: background-color 0.3s, color 0.3s;
}

.main-nav a:hover,
.main-nav a:active {
  background-color: #f1a80a;
  color: #1a237e;
  border-radius: 5px;
}
</style>
