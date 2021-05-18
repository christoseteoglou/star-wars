<template>
  <div class="details">
    <h1>{{ personObject.name }}</h1>
    <p>Gender: {{ personObject.gender }}</p>
    <p>Height: {{ personObject.height }} centimeters</p>
    <p>Mass: {{ personObject.mass }} kilograms</p>
    <button @click="closeDetails">Close</button>
  </div>
</template>

<script>
import { getHomeworld } from "@/api/api.js";
export default {
  data() {
    return {
      homeWorld: {},
    };
  },
  props: {
    personObject: {
      type: Object,
    },
  },
  created: async function () {
    const homeWorld = await getHomeworld(this.personObject.homeworld);
    this.homeWorld = homeWorld;
  },
  methods: {
    closeDetails() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped>
.details {
  width: 500px;
  height: 200px;
}

button {
  border: none;
  cursor: pointer;
  width: 80px;
  height: 30px;
  background-color: #101318;
  color: #f8f7f7;
}

button:hover {
  color: #f02d3a;
}
p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

h1 {
  margin-top: 1rem;
}
</style>