<script lnag="ts">
import { defineComponent, h, computed, provide } from "vue";

export default defineComponent({
  name: "YlRow",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    gutter: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots }) {
    //给子组件提供gutter
    provide("gutter", props.gutter);

    const classs = computed(() => ["yl-row"]);
    const styles = computed(() => {
      let res = {
        marginLeft: "",
        marginRight: "",
      };

      if (props.gutter) {
        //去除头部和尾部的空余
        res.marginLeft = `-${props.gutter / 2}px`;
        res.marginRight = res.marginLeft;

        console.log(res.marginLeft);
      }
      return res;
    });

    return () =>
      h(
        props.tag,
        { class: classs.value, style: styles.value },
        slots.default?.()
      );
  },
});
</script>
