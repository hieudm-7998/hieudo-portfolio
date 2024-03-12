<template>
  <div>
    <h1 class="text-center dark:text-white text-black pt-3">
      This portfolio mostly created by
    </h1>
    <a
      class="my-3"
      href="https://nuxtjs.org/"
    ><img
      class="block mx-auto w-3/4"
      src="~/assets/images/nuxtjs.png"
      alt=""
    ></a>
    <h2 class="text-center dark:text-white text-black">
      and deployed by
    </h2>
    <a
      class="my-3"
      href="https://www.netlify.com"
    ><img
      class="block mx-auto w-10/12"
      src="~/assets/images/netlify.png"
      alt=""
    ></a>
    <h2 class="text-center dark:text-white text-black">
      Other libraries I used :
    </h2>
    <h2 class="text-center mb-5 dark:text-white text-black">
      <a
        class="tailwind transition dark:text-white text-black"
        href="https://tailwindcss.com/"
      >Tailwind CSS</a>,
      <a
        class="vuetify transition dark:text-white text-black"
        href="https://tailwindcss.com/"
      >Vuetify</a>,
      <a
        class="fontawesome transition dark:text-white text-black"
        href="https://tailwindcss.com/"
      >FontAwesome</a>.
    </h2>
    <p class="text-center italic dark:text-white text-black">
      Thanks to every author who made these libraries, or at least made it free.
      <span class="not-italic">🙏</span>
    </p>
  </div>
</template>

<script>
export default {
  layout: 'about',
  transitions: 'fade',
  head: {
    title: 'HieuDo Portfolio | About'
  }
}
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
