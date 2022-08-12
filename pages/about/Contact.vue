<template>
  <div>
    <h1 class="mb-5">Reach me at :</h1>
    <div v-for="(contact, index) in contacts" :key="index">
      <p>{{ contact.type }} : {{ contact.info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "about",
  data() {
    return {
      contacts: [
        {
          type: "Email",
          info: "hieudm.7998@gmail.com",
        },
        {
          type: "Phone Number",
          info: "+84-36-394-9961",
        },
        {
          type: "Telegram",
          info: "@hieudm7998",
        },
        {
          type: "Facebook",
          info: "www.facebook.com/iamhieudo",
        },
        {
          type: "LinkedIn",
          info: "www.linkedin.com/in/hieu-do-b2b918245/",
        },
      ],
    };
  },
};
</script>

<style>
</style>