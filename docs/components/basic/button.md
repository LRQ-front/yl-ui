# Button 按钮

## 基础用法

使用 `type`，`round`,`circle`来定义按钮样式
:::demo

```vue
<template>
  <yl-row justify="space-around" class="mb">
    <yl-button>default</yl-button>
    <yl-button type="primary">primary</yl-button>
    <yl-button type="success">success</yl-button>
    <yl-button type="info">info</yl-button>
    <yl-button type="warning">warning</yl-button>
    <yl-button type="danger">danger</yl-button>
  </yl-row>

  <yl-row justify="space-around" class="mb">
    <yl-button round>default</yl-button>
    <yl-button round type="primary">primary</yl-button>
    <yl-button round type="success">success</yl-button>
    <yl-button round type="info">info</yl-button>
    <yl-button round type="warning">warning</yl-button>
    <yl-button round type="danger">danger</yl-button>
  </yl-row>

  <yl-row justify="space-around" class="mb">
    <yl-button circle icon="search"></yl-button>
    <yl-button circle type="primary" icon="search"></yl-button>
    <yl-button circle type="success" icon="location1"></yl-button>
    <yl-button circle type="info" icon="location"></yl-button>
    <yl-button circle type="warning" icon="star"></yl-button>
    <yl-button circle type="danger" icon="loading"></yl-button>
  </yl-row>
</template>

<style>
.mb {
  margin-bottom: 20px;
}
</style>
```

:::

## 禁用状态

使用 disabled 属性来定义按钮是否被禁用

:::demo

```vue
<template>
  <yl-row justify="space-around">
    <yl-button disabled>default</yl-button>
    <yl-button disabled type="primary">primary</yl-button>
    <yl-button disabled type="success">success</yl-button>
    <yl-button disabled type="info">info</yl-button>
    <yl-button disabled type="warning">warning</yl-button>
    <yl-button disabled type="danger">danger</yl-button>
  </yl-row>
</template>
```

:::

## 图标按钮

通过添加 icon 属性给按钮添加图标，也可以通过插槽，使用 icon 组件将图标插入

:::demo

```vue
<template>
  <yl-row justify="space-around">
    <yl-button icon="search">搜索</yl-button>
    <yl-button icon="arrow-left-bold" type="primary">上一页</yl-button>
    <yl-button icon="arrow-right-bold" type="success">下一页</yl-button>
    <yl-button icon="star" type="info">收藏</yl-button>
    <yl-button icon="location" type="warning">定位</yl-button>
    <yl-button type="danger"
      >加载中<yl-icon name="loading"></yl-icon
    ></yl-button>
  </yl-row>
</template>
```

:::

## 调整尺寸

通过 sze 属性给按钮调整尺寸，有 large，medium，small 选项,medium 是默认尺寸

:::demo

```vue
<template>
  <yl-row class="mb">
    <yl-button class="ml" size="large">Large</yl-button>
    <yl-button class="ml" size="medium">Default</yl-button>
    <yl-button class="ml" size="small">Small</yl-button>
  </yl-row>

  <yl-row class="mb">
    <yl-button round class="ml" size="large">Large</yl-button>
    <yl-button round class="ml" size="medium">Default</yl-button>
    <yl-button round class="ml" size="small">Small</yl-button>
  </yl-row>

  <yl-row>
    <yl-button icon="search" circle class="ml" size="large"></yl-button>
    <yl-button icon="search" circle class="ml" size="medium"></yl-button>
    <yl-button icon="search" circle class="ml" size="small"></yl-button>
  </yl-row>
</template>

<style>
.ml {
  margin-left: 10px;
}
.mb {
  margin-bottom: 15px;
}
</style>
```

:::

## 按钮组

使用`<yl-button-group>`对多个按钮分组
:::demo

```vue
<template>
  <yl-button-group>
    <yl-button type="success" size="medium" icon="arrow-left-bold"
      >Previous Page</yl-button
    >
    <yl-button type="success" size="medium">
      Next Page
      <yl-icon name="arrow-right-bold"></yl-icon>
    </yl-button>
  </yl-button-group>
</template>
```

:::

## 加载状态的按钮

设置 loading=true，显示加载状态
:::demo

```vue
<template>
  <yl-button loading type="primary">加载中</yl-button>
</template>
```

:::

## Button API

### Button Attributes

| 属性名   | 说明           | 类型             | 默认值      | 可选值                                                                 |
| -------- | -------------- | ---------------- | ----------- | ---------------------------------------------------------------------- |
| type     | 类型           | `string`         | `'default'` | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| default` |
| icon     | 图标           | `string`         | ----        | ----                                                                   |
| disabled | 禁用           | `boolean`        | `false`     | `'true' \| 'false'`                                                    |
| round    | 是否是圆角     | `boolean`        | `false`     | `'true' \| 'false'`                                                    |
| loading  | 是否是加载中   | `boolean`        | `false`     | `'true' \| 'false'`                                                    |
| circle   | 是否是原型按钮 | `boolean`        | `false`     | `'true' \| 'false'`                                                    |
| size     | 尺寸           | `boolean/number` | `false`     | `'large' \| 'medium'\|'small'`                                         |

### Button Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## ButtonGroup API

### ButtonGroup Slots

| 插槽名  | 说明           | 子标签 |
| ------- | -------------- | ------ |
| default | 自定义默认内容 | Button |
