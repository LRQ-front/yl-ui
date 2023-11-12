# Button 按钮

### 基础用法

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

### 禁用状态

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

### 图标按钮

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

### 调整尺寸

通过 sze 属性给按钮调整尺寸，有 large，medium，small，mini 选项

:::demo

```vue
<template>
  <yl-row>
    <yl-button class="ml" size="large">Large</yl-button>
    <yl-button class="ml" size="medium">Medium</yl-button>
    <yl-button class="ml" size="small">Small</yl-button>
    <yl-button class="ml" size="mini">Mini</yl-button>
  </yl-row>

  <yl-row>
    <yl-button size="large" round disabled></yl-button>

    <yl-button round type="success" size="medium"></yl-button>
    <yl-button round type="info" size="small"></yl-button>
    <yl-button type="warning" round size="mini"></yl-button>
  </yl-row>
</template>

<style>
.ml {
  margin-left: 10px;
}
</style>
```

:::
