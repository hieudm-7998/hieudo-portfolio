<template>
  <div>
    <h1 class="text-center xl:text-left dark:text-white text-black">
      {{
        desktop
          ? "👈🏼 Click on the specific year to see projects !"
          : "👆🏻 Click on the specific year above to see projects !"
      }}
    </h1>
  </div>
</template>

<script>
export default {
  transitions: "fade",
  layout: "projects",
  head: {
    title: 'HieuDo Portfolio | Projects',
  },
  computed: {
    desktop() {
      return this.$vuetify.breakpoint.xl;
    },
  },
};
</script>

<style>
</style>