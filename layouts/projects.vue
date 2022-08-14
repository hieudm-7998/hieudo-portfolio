<template>
  <div id="app" class="bg-white dark:bg-gray-900 min-h-screen h-full transition">
    <div class="container">
      <Header />
      <transition name="fade">
        <div class="w-100 grid grid-cols-12 xl:grid-cols-5 xl:gap-4">
          <ProjectsNavigation class="col-span-12 xl:col-span-1" />
          <Nuxt class="col-span-12 xl:col-span-4" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>