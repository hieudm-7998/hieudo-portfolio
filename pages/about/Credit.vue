<template>
  <div>
    <h1 class="text-center text-2xl">This portfolio mostly created by</h1>
    <a class="block mx-auto" href="https://nuxtjs.org/"
      ><img src="~/assets/images/nuxtjs.jpg" alt=""
    /></a>
    <h2 class="text-center">and other libraries :</h2>
    <h2 class="text-center mb-5">
      <a class="tailwind transition" href="https://tailwindcss.com/"
        >Tailwind CSS</a
      >,
      <a class="vuetify transition" href="https://tailwindcss.com/">Vuetify</a>,
      <a class="fontawesome transition" href="https://tailwindcss.com/"
        >FontAwesome</a
      >.
    </h2>
    <p class="text-center italic">Thanks to every author who made these libraries, or at least made it free. <span class="not-italic">🙏</span></p>
  </div>
</template>

<script>
export default {
  layout: "about",
};
</script>

<style lang="scss" scoped>
.tailwind {
  &:hover {
    color: #38bdf8;
  }
}
.vuetify {
  &:hover {
    color: #7bc6ff;
  }
}

.fontawesome {
  &:hover {
    color: #528dd7;
  }
}
</style>