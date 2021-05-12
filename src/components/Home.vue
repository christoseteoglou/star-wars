<template>
  <div>
    <p>Hello</p>
    <button>Previous</button>
    <button>Next</button>
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
import { getCharacters, getSingleCharacter } from "@/api/api.js";
import Characters from "@/components/Characters.vue";
export default {
  components: {
    Characters,
  },
  data() {
    return {
      results: [],
      singlePerson: {},
      previous: "",
      next: "",
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
    this.next = data.next;
    this.previous = data.previous;
    this.totalPages = Math.ceil(data.count / 10);
  },
  async cleanSearchField(evt) {
    try {
      if (evt.target.id == "previous") {
        const data = await getSingleCharacter(this.previous);
        this.results = data.results;
        this.next = data.next;
        this.previous = data.previous;
        this.currentPage--;
      } else {
        const data = await getSingleCharacter(this.next);
        this.results = data.results;
        this.next = data.next;
        this.previous = data.previous;
        this.currentPage--;
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  async characterDetails(id) {
    const data = await getSingleCharacter(id);
    this.singlePerson = data;
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

li:hover {
  background-color: #f4511e;
}
</style>
