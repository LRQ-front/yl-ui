<template>
  <button :class="classs" :disabled="disabled" @click="handleClick">
    <yl-icon v-if="loading" name="loading"></yl-icon>
    <yl-icon v-if="icon && !loading" :name="icon"></yl-icon>
    <span v-if="$slots.default"><slot></slot></span>
    <span v-if="!$slots.default && !icon && !loading">{{ type }}</span>
  </button>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from "vue";
export default defineComponent({
  name: "YlButton",
  props: {
    type: {
      type: String as PropType<
        "primary" | "success" | "warning" | "danger" | "info" | "default"
      >,
      default: "default",
      validator: (val: string) => {
        return [
          "default",
          "primary",
          "success",
          "warning",
          "danger",
          "info",
        ].includes(val);
      },
    },
    size: String as PropType<"large" | "medium" | "small" | "mini">,
    icon: {
      type: String,
      default: "",
    },
    disabled: Boolean,
    round: Boolean,
    loading: Boolean,
    circle: Boolean,
  },
  setup(props, ctx) {
    const classs = computed(() => [
      "yl-button",
      "yl-button--" + props.type, //primary default
      props.size ? "yl-button--" + props.size : "", //larget medium small
      {
        "is-disabled": props.disabled, // 状态全部以 is-开头
        "is-loading": props.loading,
        "is-round": props.round,
        "is-circle": props.circle,
      },
    ]);
    const handleClick = (e) => {
      ctx.emit("click", e);
    };
    return {
      classs,
      handleClick,
    };
  },
});
</script>
