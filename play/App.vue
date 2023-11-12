<template>
  <h1>Button和Icon测试</h1>
  <yl-button size="large" disabled></yl-button>

  <yl-button type="success" size="medium"></yl-button>
  <yl-button type="info" size="small"></yl-button>
  <yl-button type="warning" size="mini"></yl-button>

  <yl-button icon="search" round></yl-button>
  <!-- <yl-icon name="search" color="red" :size="30"></yl-icon> -->
  <yl-button loading round type="danger" size="large"></yl-button>

  <yl-icon name="location" color="red" :size="40"></yl-icon>

  <yl-button-group>
    <yl-button type="success" size="medium" icon="arrow-left-bold"
      >Previous Page</yl-button
    >
    <yl-button type="success" size="medium">
      Next Page
      <yl-icon name="arrow-right-bold"></yl-icon>
    </yl-button>
  </yl-button-group>

  <hr />

  <h1>测试布局组件Row，Col</h1>

  <div style="border: 2px solid black">
    <yl-row :gutter="20">
      <yl-col :span="6"
        ><div :style="{ backgroundColor: 'red' }">1</div></yl-col
      >
      <yl-col :span="6"
        ><div :style="{ backgroundColor: 'green' }">1</div></yl-col
      >
      <yl-col :span="6"
        ><div :style="{ backgroundColor: 'red' }">1</div></yl-col
      >
      <yl-col :span="6"
        ><div :style="{ backgroundColor: 'red' }">1</div></yl-col
      >
    </yl-row>
  </div>
  <yl-row justify="center">
    <yl-col :span="6"><div :style="{ backgroundColor: 'red' }">1</div></yl-col>
    <yl-col :span="6"
      ><div :style="{ backgroundColor: 'green' }">1</div></yl-col
    >
    <yl-col :span="6"><div :style="{ backgroundColor: 'red' }">1</div></yl-col>
  </yl-row>

  <h2>响应式布局</h2>

  <div style="border: 2px solid black">
    <yl-row>
      <yl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div :style="{ backgroundColor: 'red' }">1</div></yl-col
      >
      <yl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div :style="{ backgroundColor: 'green' }">1</div></yl-col
      >
      <yl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div :style="{ backgroundColor: 'red' }">1</div></yl-col
      >
      <yl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div :style="{ backgroundColor: 'pink' }">1</div></yl-col
      >
    </yl-row>
  </div>
</template>

<style>
* {
  /* margin: 0;
  padding: 0; */
}
</style>
