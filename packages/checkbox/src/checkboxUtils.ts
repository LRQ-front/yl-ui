import { getCurrentInstance, computed } from "vue";

export type checkboxValue = string | boolean | number;

export interface ICheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  name?: string; //input中的name属性
  modelValue: checkboxValue;
  indeterminate?: boolean; //半选
  label?: checkboxValue;
}

const useModel = (props: ICheckboxProps) => {
  const { emit } = getCurrentInstance();
  const model = computed({
    get() {
      return props.modelValue;
    },
    set(val: checkboxValue) {
      emit("update:modelValue", val);
    },
  });
  return model;
};

const useCheckboxStatus = (props: ICheckboxProps, model) => {
  const isChecked = computed(() => {
    const value = model.value;
    return value;
  });
  return isChecked;
};

const useEvent = () => {
  const { emit } = getCurrentInstance();
  function handleChange(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    const value = target.checked ? true : false;
    emit("change", value);
  }
  return handleChange;
};
export function useCheckbox(props: ICheckboxProps) {
  //1.实现双向绑定
  const model = useModel(props);
  const isChecked = useCheckboxStatus(props, model);
  const handleChange = useEvent();
  return {
    model,
    handleChange,
    isChecked,
  };
}
