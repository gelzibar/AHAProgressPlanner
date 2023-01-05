<template>
  <div>
    <nav>
      <ul class="main-menu">
        <li>
          <RouterLink to="/">Lobby</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">Progress</RouterLink>
        </li>
        <li>
          <RouterLink to="/arsenal">Roster</RouterLink>
        </li>
        <li>
          <RouterLink to="/arsenal">Recruitment</RouterLink>
        </li>
        <li>
          <RouterLink to="/arsenal">Store</RouterLink>
        </li>
        <li>
          <RouterLink to="/arsenal">Arsenal</RouterLink>
        </li>
        <li>
          <RouterLink to="/arsenal">Library</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
