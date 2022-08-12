<template>
  <div class="app container">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style>
*{
  overflow-y: hidden;
}
.app {
  font-family: "Inter", sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.primary-color {
  color: rgb(249 115 22);
}
::-moz-selection { /* Code for Firefox */
  color: white;
  background: rgb(249 115 22);
}

::selection {
  color: white;
  background: rgb(249 115 22);
}
</style>