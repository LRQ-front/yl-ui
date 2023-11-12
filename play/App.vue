<template>
  <h1>Button和Icon测试</h1>

  <!-- size测试 -->
  <yl-button size="large" round disabled></yl-button>
  <yl-button round type="success" size="medium"></yl-button>
  <yl-button round type="success"></yl-button>
  <yl-button round type="info" size="small"></yl-button>
  <yl-button type="warning" round size="mini"></yl-button>

  <yl-button icon="search" round>搜索</yl-button>
  <!-- <yl-icon name="search" color="red" :size="30"></yl-icon> -->
  <yl-button loading circle round type="danger" size="large">hello</yl-button>

  <yl-icon name="location" color="red" :size="40"></yl-icon>

  <yl-button icon="search" circle size="mini" type="primary"></yl-button>

  <yl-icon name="search"></yl-icon>

  <yl-button-group>
    <yl-button type="success" size="medium" icon="arrow-left-bold"
      >Previous Page</yl-button
    >
    <yl-button type="success">middle</yl-button>
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
  <yl-row justify="space-around">
    <yl-col :span="6"><div :style="{ backgroundColor: 'red' }">1</div></yl-col>
    <yl-col :span="6"
      ><div :style="{ backgroundColor: 'green' }">1</div></yl-col
    >
    <yl-col :span="6"><div :style="{ backgroundColor: 'red' }">1</div></yl-col>
  </yl-row>

  <h2>响应式布局</h2>

  <div style="border: 2px solid black">
    <yl-row :gutter="20">
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

  <yl-row>
    <yl-col :offset="6" :span="6"
      ><div style="background-color: gray; height: 20px"></div
    ></yl-col>
    <yl-col :offset="6" :span="6"
      ><div style="background-color: gray; height: 20px"></div
    ></yl-col>
  </yl-row>
</template>

<style>
* {
  /* margin: 0;
  padding: 0; */
}
</style>
