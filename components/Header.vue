<template>
  <div class="py-5">
    <div class="flex items-center justify-between">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/work">Work</NuxtLink>
      <NuxtLink to="/about">About me</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
/* a.nuxt-link-active {
  font-weight: bold;
} */
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #ff971a;
}
</style>
