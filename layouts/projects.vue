<template>
  <div class="app container">
    <Header />
    <div class="grid xs:grid-cols-12 lg:grid-cols-5 lg:gap-4">
      <ProjectsNavigation class="xs:col-span-12 xl:col-span-0" />
      <Nuxt class="xs:col-span-12 xl:col-span-4" />
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