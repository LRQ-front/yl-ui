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
    xs: {
      type: Number,
    },
    sm: {
      type: Number,
    },
    md: {
      type: Number,
    },
    lg: {
      type: Number,
    },
    xl: {
      type: Number,
    },
  },
  setup(props, { slots }) {
    //导入父组件的gutter，就是每个col的间距
    const gutter = inject("gutter", 0);

    //类名
    const classs = computed(() => {
      const res: string[] = [];

      //1.处理span和offset
      ["span", "offset"].forEach((item) => {
        const size = props[item];

        //yl-col-span-3    yl-col-offset-6
        if (typeof size == "number" && size > 0) {
          res.push(`yl-col-${item}-${size}`);
        }
      });

      //2.处理响应式
      const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
      sizes.forEach((size) => {
        if (typeof props[size] == "number") {
          res.push(`yl-col-${size}-${props[size]}`);
        }

        if (typeof props["offset"] == "number" && props["offset"] > 0) {
          res.push(`yl-col-${size}-offset-${props["offset"]}`);
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
