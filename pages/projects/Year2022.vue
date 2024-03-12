<template>
  <div class="dark:text-white text-black">
    <div class="text-center">
      <h1 class="text-2xl uppercase">
        2022's projects
      </h1>
      <p
        class="
          text-sm
          italic
          text-gray-500
          dark:text-gray-400
          pb-2
          mb-3
          border-b-2 border-gray-300
        "
      >
        / Frameworks and the flexing <span class="not-italic">🔥</span> /
      </p>
    </div>
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="pb-3 mb-3 border-b-2 border-gray-300"
    >
      <v-carousel
        :show-arrows="false"
        :height="desktop ? '300px' : '200px'"
        class="rounded mb-3"
      >
        <v-carousel-item
          v-for="(image, i) in project.images"
          :key="i"
          :src="image.src"
        />
      </v-carousel>
      <h1 class="uppercase text-lg">
        {{ project.name }}
      </h1>
      <a
        :href="project.url"
        target="_blank"
        class="italic hover:text-orange-500 text-sm cursor-pointer mb-3 block"
      >{{ project.url }} <span><fa :icon="['fa', 'link']" /></span></a>
      <h1 class="text-sm mb-3 text-justify">
        {{ project.description }}
      </h1>
      <h1 class="text-sm">
        Programming languages & libraries used: {{ project.technology }}.
      </h1>
      <h1 class="text-sm">
        Design system used: {{ project.designSystem }}.
      </h1>
    </div>
  </div>
</template>

<script>
import projects from '~/data/projects.js'

export default {
  name: 'Year2022',
  layout: 'projects',
  transitions: 'fade',
  data () {
    return {
      projects: projects.filter(year => year.year === 2022)
    }
  },
  head: {
    title: 'HieuDo Portfolio | Projects | 2022'
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
