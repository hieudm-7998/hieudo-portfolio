<template>
  <div class="py-5">
    <div class="flex justify-between items-center mb-5">
      <div class="border-b-2">
        <NuxtLink
          class="text-2xl hd-logo"
          to="/"
        >
          <span
            class="
              dark:text-white
              gradient-2
              transition
              ease-in-out
              duration-500
            "
          >hieudo</span><span
            class="dark:text-white gradient transition ease-in-out duration-500"
          >Portfolio</span>
        </NuxtLink>
      </div>
      <div class="flex justify-center items-center">
        <!-- <LanguageToggle />
        <span class="text-black dark:text-white">|</span> -->
        <DarkModeToggle />
      </div>
    </div>
    <div
      class="
        flex
        items-center
        justify-between
        uppercase
        dark:text-white
        text-black
      "
    >
      <NuxtLink to="/" exact>
        Home
      </NuxtLink>
      <NuxtLink to="/about">
        About me
      </NuxtLink>
      <NuxtLink to="/projects">
        Projects
      </NuxtLink>
      <NuxtLink to="/work">
        Work
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import DarkModeToggle from './DarkModeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'
export default {
  name: 'Header',
  components: { DarkModeToggle, LanguageToggle }
}
</script>

<style lang="scss">
.nuxt-link-active {
  color: #ff971a;
}

.nuxt-link-exact-active {
  color: #ff971a;
}

.hd-logo {
  .gradient {
    background: linear-gradient(
      90deg,
      rgba(255, 151, 26, 1) 0%,
      rgba(65, 184, 131, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .gradient-2 {
    color: rgb(107 114 128);
  }
  &:hover {
    .gradient {
      background: rgb(107 114 128);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .gradient-2 {
      background: linear-gradient(
        90deg,
        rgba(255, 151, 26, 1) 0%,
        rgba(65, 184, 131, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
