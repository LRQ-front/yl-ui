# Layout 布局

## 基础布局

使用 yl-row 和 yl-col 组件进行布局,有 24 分栏

:::demo

```vue
<template>
  <div>
    <yl-row class="mb">
      <yl-col :span="24"> <div class="grid-content gray-3"></div></yl-col>
    </yl-row>
    <yl-row class="mb">
      <yl-col :span="12"> <div class="grid-content gray-2"></div></yl-col>
      <yl-col :span="12"> <div class="grid-content gray-1"></div></yl-col>
    </yl-row>
    <yl-row class="mb">
      <yl-col :span="8"> <div class="grid-content gray-2"></div></yl-col>
      <yl-col :span="8"> <div class="grid-content gray-1"></div></yl-col>
      <yl-col :span="8"> <div class="grid-content gray-2"></div></yl-col>
    </yl-row>
    <yl-row class="mb">
      <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
      <yl-col :span="6"> <div class="grid-content gray-1"></div></yl-col>
      <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
      <yl-col :span="6"> <div class="grid-content gray-1"></div></yl-col>
    </yl-row>
    <yl-row class="mb">
      <yl-col :span="4"> <div class="grid-content gray-2"></div></yl-col>
      <yl-col :span="4"> <div class="grid-content gray-1"></div></yl-col>
      <yl-col :span="4"> <div class="grid-content gray-2"></div></yl-col>
      <yl-col :span="4"> <div class="grid-content gray-1"></div></yl-col>
      <yl-col :span="4"> <div class="grid-content gray-2"></div></yl-col>
      <yl-col :span="4"> <div class="grid-content gray-1"></div></yl-col>
    </yl-row>
  </div>
</template>

<style lang="scss">
.mb {
  margin-bottom: 20px;
}
.gray-3 {
  background-color: #99a9bf;
}
.gray-2 {
  background-color: #d3dce6;
}
.gray-1 {
  background-color: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  height: 36px;
}
</style>
```

:::

## 分栏间隔

使用 yl-row 的 gutter 属性来设置分栏间隔

:::demo

```vue
<template>
  <yl-row class="mb" :gutter="20">
    <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
    <yl-col :span="6"> <div class="grid-content gray-1"></div></yl-col>
    <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
    <yl-col :span="6"> <div class="grid-content gray-1"></div></yl-col>
  </yl-row>
</template>

<style>
.mb {
  margin-bottom: 20px;
}
.gray-3 {
  background-color: #99a9bf;
}
.gray-2 {
  background-color: #d3dce6;
}
.gray-1 {
  background-color: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  height: 36px;
}
</style>
```

:::

## 混合布局

:::demo

```vue
<template>
  <yl-row class="mb" :gutter="20">
    <yl-col :span="4"> <div class="grid-content gray-2"></div></yl-col>
    <yl-col :span="8"> <div class="grid-content gray-1"></div></yl-col>
    <yl-col :span="8"> <div class="grid-content gray-2"></div></yl-col>
    <yl-col :span="4"> <div class="grid-content gray-1"></div></yl-col>
  </yl-row>
  <yl-row class="mb" :gutter="20">
    <yl-col :span="8"> <div class="grid-content gray-2"></div></yl-col>
    <yl-col :span="4"> <div class="grid-content gray-1"></div></yl-col>
    <yl-col :span="8"> <div class="grid-content gray-2"></div></yl-col>
    <yl-col :span="4"> <div class="grid-content gray-1"></div></yl-col>
  </yl-row>
  <yl-row class="mb" :gutter="20">
    <yl-col :span="8"> <div class="grid-content gray-2"></div></yl-col>
    <yl-col :span="16"> <div class="grid-content gray-1"></div></yl-col>
  </yl-row>
</template>

<style>
.mb {
  margin-bottom: 20px;
}
.gray-3 {
  background-color: #99a9bf;
}
.gray-2 {
  background-color: #d3dce6;
}
.gray-1 {
  background-color: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  height: 36px;
}
</style>
```

:::

## 列偏移

通过指定 yl-col 的 offset 属性，指定偏移的栏数

:::demo

```vue
<template>
  <yl-row class="mb" :gutter="20">
    <yl-col :span="6" :offset="6">
      <div class="grid-content gray-2"></div
    ></yl-col>
    <yl-col :span="6" :offset="6">
      <div class="grid-content gray-1"></div
    ></yl-col>
  </yl-row>
  <yl-row class="mb" :gutter="20">
    <yl-col :span="16" :offset="8">
      <div class="grid-content gray-1"></div
    ></yl-col>
  </yl-row>
  <yl-row class="mb" :gutter="20">
    <yl-col :span="6" :offset="12">
      <div class="grid-content gray-1"></div
    ></yl-col>
  </yl-row>
  <yl-row class="mb" :gutter="20">
    <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
    <yl-col :span="6" :offset="6">
      <div class="grid-content gray-1"></div
    ></yl-col>
  </yl-row>
</template>

<style>
.mb {
  margin-bottom: 20px;
}
.gray-3 {
  background-color: #99a9bf;
}
.gray-2 {
  background-color: #d3dce6;
}
.gray-1 {
  background-color: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  height: 36px;
}
</style>
```

:::

## 对齐方式

设置 yl-row 的 justify 属性定义子元素的排列方式，有 start，center，end，space-between，space-around。
:::demo

```vue
<template>
  <yl-row class="mb">
    <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
    <yl-col :span="6"> <div class="grid-content gray-1"></div></yl-col>
    <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
  </yl-row>
  <yl-row class="mb" justify="center">
    <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
    <yl-col :span="6"> <div class="grid-content gray-1"></div></yl-col>
    <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
  </yl-row>
  <yl-row class="mb" justify="space-between">
    <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
    <yl-col :span="6"> <div class="grid-content gray-1"></div></yl-col>
    <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
  </yl-row>
  <yl-row class="mb" justify="space-around">
    <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
    <yl-col :span="6"> <div class="grid-content gray-1"></div></yl-col>
    <yl-col :span="6"> <div class="grid-content gray-2"></div></yl-col>
  </yl-row>
</template>

<style>
.mb {
  margin-bottom: 20px;
}
.gray-3 {
  background-color: #99a9bf;
}
.gray-2 {
  background-color: #d3dce6;
}
.gray-1 {
  background-color: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  height: 36px;
}
</style>
```

:::

## 响应式布局

主要设置了五个尺寸，xs、sm、md、lg 和 xl。

:::demo

```vue
<template>
  <yl-row :gutter="10">
    <yl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content gray-2"></div
    ></yl-col>
    <yl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content gray-1"></div
    ></yl-col>
    <yl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content gray-2"></div
    ></yl-col>
    <yl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content gray-1"></div
    ></yl-col>
  </yl-row>
</template>

<style>
.mb {
  margin-bottom: 20px;
}
.gray-3 {
  background-color: #99a9bf;
}
.gray-2 {
  background-color: #d3dce6;
}
.gray-1 {
  background-color: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  height: 36px;
}
</style>
```

:::

## Row API

### Row Attributes

| 属性名  | 说明           | 类型     | 默认值    | 可选值                                                               |
| ------- | -------------- | -------- | --------- | -------------------------------------------------------------------- |
| justify | 水平排列方式   | `string` | `'start'` | `'start' \| 'end' \| 'center' \| 'space-between' \| 'space-around' ` |
| gutter  | 栅栏间隔       | `number` |           |                                                                      |
| tag     | 自定义元素标签 | `string` | `div`     |                                                                      |

### Row Slots

| 插槽名  | 说明           | 子标签 |
| ------- | -------------- | ------ |
| default | 自定义默认内容 | Col    |

## Col API

### Col Attributes

| 属性名 | 说明                      | 类型     | 默认值 | 可选值  |
| ------ | ------------------------- | -------- | ------ | ------- |
| span   | 栅栏所占列数              | `number` | `24`   | `0-24 ` |
| offset | 左侧偏移栅栏数            | `number` | `0`    |         |
| tag    | 自定义元素标签            | `string` | `div`  |         |
| xs     | <768px 时的栅栏所占列数   | `number` |        |         |
| sm     | >=768px 时的栅栏所占列数  | `number` |        |         |
| md     | >=992px 时的栅栏所占列数  | `number` |        |         |
| lg     | >=1200px 时的栅栏所占列数 | `number` |        |         |
| xl     | >=1920px 时的栅栏所占列数 | `number` |        |         |

### Col Slots

| 插槽名  | 说明           | 子标签 |
| ------- | -------------- | ------ |
| default | 自定义默认内容 |        |
