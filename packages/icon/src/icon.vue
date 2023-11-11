<template>
  <i :class="`yl-icon-${name}`" :style="{ fontSize, color }"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "YlIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
    color: {
      type: String,
    },
    size: {
      type: [Number, String],
    },
  },
  computed: {
    fontSize() {
      return typeof this.size == "string"
        ? this.size.slice(-2) == "px"
          ? this.size
          : this.size + "px"
        : this.size + "px";
    },
  },
});
</script>
