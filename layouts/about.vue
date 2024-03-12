<template>
  <div id="app" class="bg-white dark:bg-gray-900 h-screen transition">
    <div class="container">
      <Header />
      <div class="w-100 grid grid-cols-12 xl:grid-cols-5 xl:gap-4">
        <AboutNavigation class="col-span-12 xl:col-span-1" />
        <transition name="fade">
          <Nuxt class="col-span-12 xl:col-span-4" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
