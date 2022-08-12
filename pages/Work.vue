<template>
  <div class="w-full my-10">
    <h1 class="text-center text-2xl mb-5">My work history 💼</h1>
    <v-timeline>
      <v-timeline-item color="#FF0501">
        <p class="text-sm italic text-gray-500">Jan. 2021</p>
        <a class="unitiv transition" href="https://unitiv.vn/" target="_blank"
          >UNITIV Vietnam</a
        >
      </v-timeline-item>
      <v-timeline-item color="#1B3066" class="text-right">
        <p class="text-sm italic text-gray-500">Jun. 2021</p>
        <a class="vti transition" href="https://vti.com.vn/">VTI Group</a>
      </v-timeline-item>
      <v-timeline-item color="#2D4E97">
        <p class="text-sm italic text-gray-500">Jan. 2022</p>
        <a
          class="smartosc transition"
          href="https://www.smartosc.com/"
          target="_blank"
          >SmartOSC JSC. <span class="italic">(current)</span></a
        >
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-timeline::before {
  left: 50%;
  background: gray !important;
}
.unitiv {
  &:hover {
    color: #ff0501;
  }
}
.vti {
  &:hover {
    color: #1b3066;
  }
}
.smartosc {
  &:hover {
    color: #2d4e97;
  }
}
</style>