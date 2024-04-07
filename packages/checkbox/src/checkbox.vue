<template>
  <label :class="checkboxClass">
    <span :class="inputOuterClass">
      <input
        class="yl-checkbox__original"
        type="checkbox"
        ref="inputRef"
        :value="label"
        v-model="model"
        :disabled="disabled"
        :checked="isChecked"
        :indeterminate="indeterminate"
        @change="handleChange"
      />
      <span class="yl-checkbox__inner"></span>
    </span>
    <span v-if="$slots.default || label" class="yl-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, ref, onMounted, defineComponent } from "vue";
import { useCheckbox } from "./checkboxUtils";

export default defineComponent({
  name: "YlCheckbox",
  props: {
    name: {
      // checkbox name属性
      type: String,
    },
    modelValue: {
      // input绑定的值
      type: [Boolean, Number, String],
    },
    label: {
      // 选中状态的值
      type: [Boolean, Number, String],
    },
    indeterminate: Boolean, // 半选
    disabled: Boolean, // 禁用
    checked: Boolean, // 是否选中
  },
  setup(props) {
    const inputRef = ref<HTMLInputElement>(null);
    const { handleChange, model, isChecked } = useCheckbox(props);

    const checkboxClass = computed(() => {
      return ["yl-checkbox", props.disabled ? "is-disabled" : ""];
    });

    const inputOuterClass = computed(() => [
      "yl-checkbox__input",
      props.indeterminate ? "is-indeterminate" : "",
      props.disabled ? "is-disabled" : "",
      isChecked.value || props.checked ? "is-checked" : "",
    ]);

    return {
      checkboxClass,
      inputOuterClass,
      handleChange,
      model,
      isChecked,
    };
  },
});
</script>
