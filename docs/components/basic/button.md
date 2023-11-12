# Button 按钮

### 基础用法

使用 `type`，`round`来定义按钮样式
:::demo

```vue
<template>
  <yl-row justify="space-around">
    <yl-button>default</yl-button>
    <yl-button type="primary">primary</yl-button>
    <yl-button type="success">success</yl-button>
    <yl-button type="info">info</yl-button>
    <yl-button type="warning">warning</yl-button>
    <yl-button type="danger">danger</yl-button>
  </yl-row>

  <yl-row justify="space-around">
    <yl-button round>default</yl-button>
    <yl-button round type="primary">primary</yl-button>
    <yl-button round type="success">success</yl-button>
    <yl-button round type="info">info</yl-button>
    <yl-button round type="warning">warning</yl-button>
    <yl-button round type="danger">danger</yl-button>
  </yl-row>
</template>
```

:::
