<template>
  <div>
    <h1 class="text-center xl:text-left dark:text-white text-black">
      {{
        desktop
          ? "👈🏼 Click on the specific field to read about me !"
          : "👆🏻 Click on the specific field to read about me !"
      }}
    </h1>
  </div>
</template>

<script>
export default {
  transitions: 'fade',
  layout: 'about',
  head: {
    title: 'HieuDo Portfolio | About'
  },
  computed: {
    desktop () {
      return this.$vuetify.breakpoint.xl
    }
  }
}
</script>

<style>
</style>
