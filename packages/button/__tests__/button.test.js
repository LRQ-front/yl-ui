import { mount } from "@vue/test-utils";
import YlButton from "../src/button.vue";

describe("yl-button.vue", () => {
  test("默认参数", () => {
    const wrapper = mount(YlButton);
    //类查询
    expect(wrapper.classes()).toContain("yl-button--default");
    //内容查询
    expect(wrapper.find("button").text()).toBe("default");
  });

  it("type=primary,size=large参数", async () => {
    const wrapper = mount(YlButton, {
      props: {
        type: "primary",
        size: "large",
      },
    });
    //类名断言
    expect(wrapper.classes()).toContain("yl-button--primary");
    expect(wrapper.classes()).toContain("yl-button--large");
  });

  it("触发click", async () => {
    const wrapper = mount(YlButton);
    //触发click
    await wrapper.find("button").trigger("click");
    //获取触发事件click，判断是否是true
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("button是disable情况", () => {
    const wrapper = mount(YlButton, {
      props: {
        disabled: true,
      },
    });
    expect(wrapper.classes()).toContain("is-disabled");
    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });

  it("测试loading效果", () => {
    const wrapper = mount(YlButton, {
      props: {
        loading: true,
      },
    });

    expect(wrapper.findComponent({ name: "YlIcon" }).props("name")).toBe(
      "loading"
    );
  });

  it("测试icon-location", () => {
    const wrapper = mount(YlButton, {
      props: {
        icon: "location",
      },
    });
    expect(wrapper.findComponent({ name: "YlIcon" }).props("name")).toBe(
      "location"
    );
  });

  it("测试插槽", () => {
    const wrapper = mount(YlButton, {
      slots: {
        default: "默认插槽",
      },
    });

    expect(wrapper.text()).toBe("默认插槽");
  });

  it("round属性", () => {
    const wrapper = mount(YlButton, {
      props: {
        round: true,
      },
    });
    expect(wrapper.classes()).toContain("is-round");
  });

  it("circle属性", () => {
    const wrapper = mount(YlButton, {
      props: {
        circle: true,
      },
    });
    expect(wrapper.classes()).toContain("is-circle");
  });
});
