<template>
    <div>
        <nav>
        <RouterLink to="/">Lobby</RouterLink>
        <RouterLink to="/about">Progress</RouterLink>
        <RouterLink to="/arsenal">Roster</RouterLink>
        <RouterLink to="/arsenal">Recruitment</RouterLink>
        <RouterLink to="/arsenal">Store</RouterLink>
        <RouterLink to="/arsenal">Arsenal</RouterLink>
        <RouterLink to="/arsenal">Library</RouterLink>

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