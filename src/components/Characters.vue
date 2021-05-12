<template>
  <div>
    <h1>{{ singlePerson.name }}</h1>
    <p>Height: {{ singlePerson.gender }}</p>
    <p>Gender: {{ singlePerson.height }} cm</p>
    <p>Mass: {{ singlePerson.mass }} kg</p>
  </div>
</template>

<script>
// import { getHomeWorld } from "@/api/api.js";
export default {
  data() {
    return {
      homeWorld: {},
    };
  },
  props: {
    singlePerson: {
      type: Object,
    },
  },
  // created: async function () {
  //   const homeWorld = await getHomeWorld(this.singlePerson.homeWorld);
  //   this.homeWorld = homeWorld;
  // },
};
</script>

<style scoped>
</style>
