<template>
  <div>
    <h1 class="text-2xl uppercase">2021's projects</h1>
    <p
      class="text-sm italic text-gray-500 pb-2 mb-3 border-b-2 border-gray-300"
    >
      ( First year on business <span class="not-italic">😇</span> )
    </p>
    <div
      class="pb-3 mb-3 border-b-2 border-gray-300"
      v-for="(project, index) in projects"
      :key="index"
    >
      <v-carousel :show-arrows="false" :height="desktop ? '300px' : 'auto'" class="rounded mb-3">
        <v-carousel-item
          v-for="(image, i) in project.images"
          :key="i"
          :src="image.src"
          contain
        ></v-carousel-item>
      </v-carousel>
      <h1 class="uppercase text-lg">{{ project.name }}</h1>
      <a
        :href="project.url"
        target="_blank"
        class="italic hover:text-orange-500 text-sm cursor-pointer mb-3 block"
        >{{ project.url }} <span><font-awesome-icon icon="link" /></span
      ></a>
      <h1 class="text-sm mb-3 text-justify">{{ project.description }}</h1>
      <h1 class="text-sm">
        Programming languages & libraries used: {{ project.technology }}.
      </h1>
      <h1 class="text-sm">Design system used: {{ project.designSystem }}.</h1>
    </div>
  </div>
</template>

<script>
import projects from "~/data/projects.js";

export default {
  name: "2021",
  layout: "projects",
  data() {
    return {
      projects: projects.filter((year) => year.year === 2021),
    };
  },
  computed: {
    desktop() {
      return this.$vuetify.breakpoint.xl;
    },
  },
  mounted() {
    console.log(this.desktop)
  }
};
</script>

<style>
</style>