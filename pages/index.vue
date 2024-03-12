<template>
  <div>
    <div class="text-center mb-5">
      <img class="rounded-lg" src="~/static/H.jpg" alt="">
    </div>
    <div class="text-center p-5 rounded bg-orange-300 text-2xl">
      🚧 Hey ! This is my old portfolio, if you want to find more information
      please
      <a href="https://hews-portfolio.vercel.app/">go to my latest portfolio !</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  transitions: 'fade'
}
</script>

<style>
a:hover {
  text-decoration: underline;
}
</style>
