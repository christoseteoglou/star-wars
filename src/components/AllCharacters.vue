<template>
  <div>
    <ul v-if="results">
      <li
        v-for="(item, index) in results"
        :key="index"
        @click="getDetails(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
<style></style>;
