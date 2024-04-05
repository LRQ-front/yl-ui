import { mount } from "@vue/test-utils";
import YlButtonGroup from "../src/button-group.vue";
import YlButton from "@yl-ui/button";

describe("buttongroup组件", () => {
  it("插槽使用", () => {
    const wrapper = mount(YlButtonGroup, {
      slots: {
        default: "<button>Button 1</button><button>Button 2</button>",
      },
    });
    expect(wrapper.findAll("button")).toHaveLength(2); // 检查是否渲染了两个按钮
    expect(wrapper.text()).toBe("Button 1Button 2"); // 检查按钮文本内容
  });

  it("无传递props", () => {
    const wrapper = mount(YlButtonGroup);
    expect(wrapper.text()).toBe(""); // 检查没有内容时是否为空
  });
});
