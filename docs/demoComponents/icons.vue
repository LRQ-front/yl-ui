<template>
  <div>
    <ul class="icons">
      <li class="item" v-for="(icon, index) in iconArrs" :key="index">
        <yl-icon :name="icon"></yl-icon>
        <span class="icon-name">{{ icon }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const iconArrs = ref([
  "loading",
  "location",
  "location1",
  "plus",
  "arrow-down",
  "arrow-left-bold",
  "arrow-up-bold",
  "arrow-right-bold",
  "logistics-storehouse",
  "sousuo",
  "home",
  "jiazai",
  "jiazai1",
  "minus",
  "search",
  "star",
]);
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.icons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 100px;
  box-sizing: border-box;

  .item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    margin-top: 0;
    .icon-name {
      display: inline-block;
      margin-top: 5px;
      font-size: 14px;
    }
  }
}
</style>
