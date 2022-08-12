<template>
  <div>
    <h1 class="text-center xl:text-left">
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
  layout: "about",
  computed: {
    desktop() {
      return this.$vuetify.breakpoint.xl;
    },
  },
};
</script>

<style>
</style>