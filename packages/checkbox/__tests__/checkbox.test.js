import { mount } from "@vue/test-utils";
import YlCheckbox from "../src/checkbox.vue";

describe("YlCheckbox", () => {
  it("默认参数", async () => {
    const wrapper = mount(YlCheckbox);
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.element.checked).toBe(false);
  });

  it("选中参数", async () => {
    const wrapper = mount(YlCheckbox, {
      props: {
        modelValue: true,
      },
    });
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.element.checked).toBe(true);
  });

  it("label参数", async () => {
    const label = "Test Label";
    const wrapper = mount(YlCheckbox, {
      props: {
        label,
      },
    });
    const labelText = wrapper.find(".yl-checkbox__label").text();
    expect(labelText).toBe(label);
  });

  it("disabled参数", async () => {
    const wrapper = mount(YlCheckbox, {
      props: {
        disabled: true,
      },
    });
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.attributes("disabled")).toBeDefined();
  });

  it("emits input event with correct value when checkbox is clicked", async () => {
    const wrapper = mount(YlCheckbox);
    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setChecked();
    expect(wrapper.emitted().change[0][0]).toBe(true);
  });

  it("插槽", async () => {
    const wrapper = mount(YlCheckbox, {
      slots: {
        default: "Custom Label",
      },
    });
    const labelText = wrapper.find(".yl-checkbox__label").text();
    expect(labelText).toBe("Custom Label");
  });
});
