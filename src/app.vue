<template>
  <div id="app">
  <header>
    <Header />
  </header>
    <NuxtPage/>
  </div>
</template>

<script setup>


useMeta({
  title: 'TikkaMemo'
})
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  font-family: 'M PLUS 1p', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>

