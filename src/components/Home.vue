<template>
  <div>
    <p>Hello</p>
    <!-- <button>get characters</button> -->
    <ul v-if="results">
      <li
        v-for="(item, index) in results"
        :key="index"
        @click="getDetails(item)"
      >
        {{ item.name }}
      </li>
    </ul>
    <!-- <p>{{ singlePerson }}</p> -->
    <Characters :singlePerson="singlePerson" />
  </div>
</template>

<script>
import { getCharacters } from "@/api/api.js";
import Characters from "@/components/Characters.vue";
export default {
  components: {
    Characters,
  },
  data() {
    return {
      results: [],
      singlePerson: null,
    };
  },
  methods: {
    getDetails(id) {
      //   const data = await getSingleCharacter(id);
      this.singlePerson = id;
    },
  },
  created: async function () {
    const data = await getCharacters();
    this.results = data.results;
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
}

ul {
  list-style: none;
}
</style>
