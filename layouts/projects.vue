<template>
  <div class="app container">
    <Header />
    <div class="grid grid-cols-5 gap-4">
      <ProjectsNavigation />
      <Nuxt class="col-span-4" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  color: #ff971a;
}
</style>