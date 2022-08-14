<template>
  <div id="app" class="bg-white dark:bg-gray-900 h-screen transition">
    <div class="container">
      <Header />
      <transition name="fade">
        <Nuxt />
      </transition>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: "Inter", sans-serif;
}

.primary-color {
  color: rgb(249 115 22);
}
::-moz-selection {
  /* Code for Firefox */
  color: white;
  background: rgb(249 115 22);
}

::selection {
  color: white;
  background: rgb(249 115 22);
}
</style>