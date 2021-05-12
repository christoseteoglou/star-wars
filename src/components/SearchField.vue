<template>
  <div class="searchField"></div>
</template>

<script>
export default {
  data() {
    return {
      searchResults: {},
    };
  },
  props: {
    searchField: {
      type: Object,
    },
  },
};
</script>

<style scoped>
</style>
