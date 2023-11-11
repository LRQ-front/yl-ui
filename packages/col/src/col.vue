<script lang="ts">
import { defineComponent, h, computed, inject } from "vue";

export default defineComponent({
  name: "YlCol",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots }) {
    //导入父组件的gutter
    const gutter = inject("gutter", 0);

    //类名
    const classs = computed(() => {
      const res: string[] = [];

      ["span", "offset"].forEach((item) => {
        const size = props[item];

        //yl-col-span-3    yl-col-offset-6
        if (typeof size == "number" && size > 0) {
          res.push(`yl-col-${item}-${size}`);
        }
      });

      return ["yl-col", ...res];
    });

    //左右padding样式处理
    const style = computed(() => {
      if (gutter) {
        return {
          paddingLeft: gutter / 2 + "px",
          paddingRight: gutter / 2 + "px",
        };
      }
      return {};
    });

    return () =>
      h(
        props.tag,
        { class: classs.value, style: style.value },
        slots.default?.()
      );
  },
});
</script>
