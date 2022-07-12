<template>
  <div>
    <ul v-for="(project, index) in projects">
      <li :key="index">{{ project }}</li>
    </ul>
  </div>
</template>

<script>
import * as projects from "~/data/projects.json";

export default {
  layout: "projects",
  data() {
    return {
      projects,
    };
  },
  mounted() {
    console.log(this.projects);
  },
};
</script>

<style>
</style>