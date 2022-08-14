<template>
  <div class="flex justify-center items-center px-3 py-2">
    <button @click="languageSwitch">
      <span :class="isUs ? 'fi-gb' : 'fi-vn'" class="fi"></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUs: true,
    };
  },
  methods: {
    languageSwitch() {
      this.isUs = !this.isUs;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/node_modules/flag-icons/css/flag-icons.min.css";

.fi {
  height: 1.5rem;
  width: 1.5rem;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  filter: grayscale(1);
  transition: filter 0.1s ease-in-out;
  &:hover {
    filter: grayscale(0);
  }
}
</style>