# icon 图标

## 基本使用

设定`yl-icon`组件的 name 属性值
:::demo

```vue
<template>
  <div>
    <yl-icon class="ml" name="loading"></yl-icon>
    <yl-icon class="ml" name="search"></yl-icon>
    <yl-icon class="ml" name="location"></yl-icon>
  </div>
</template>

<style>
.ml {
  display: inline-block;
  margin-left: 15px;
}
</style>
```

:::

## 图标集合

目前支持的图标集合

<demo-block>
  <icons></icons>
</demo-block>

## API

### Attributes

| 属性名   | 说明     | 类型      | 默认值  | 可选值                                                                 |
| -------- | -------- | --------- | ------- | ---------------------------------------------------------------------- |
| name     | 图标名称 | `string`  | `''`    | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| default` |
| icon     | 图标     | `string`  | ----    | ----                                                                   |
| disabled | 禁用     | `boolean` | `false` | `'true' \| 'false'`                                                    |
