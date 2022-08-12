<template>
  <div class="app container">
    <Header />
    <div class="w-100 grid grid-cols-12 xl:grid-cols-5 xl:gap-4">
      <ProjectsNavigation class="col-span-12 xl:col-span-1" />
      <Nuxt class="col-span-12 xl:col-span-4" />
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