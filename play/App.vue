<template>
  <div>
    <ul class="icons">
      <li class="item" v-for="(icon, index) in iconArrs" :key="index">
        <yl-icon :name="icon"></yl-icon>
        <span class="icon-name">{{ icon }}</span>
      </li>
    </ul>
  </div>

  <hr />
  <h1>Button和Icon测试</h1>
  <!-- size测试 -->
  <yl-button size="large" round disabled></yl-button>
  <yl-button round type="success" size="medium"></yl-button>
  <yl-button round type="success"></yl-button>
  <yl-button round type="info" size="small"></yl-button>
  <yl-button icon="search">搜索</yl-button>

  <yl-button icon="search" round>搜索</yl-button>
  <!-- <yl-icon name="search" color="red" :size="30"></yl-icon> -->
  <yl-button loading circle round type="danger" size="large"></yl-button>

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

  <h2>测试circle</h2>
  <yl-button circle size="large" icon="search"> </yl-button>
  <yl-button circle icon="search"></yl-button>
  <yl-button circle icon="search" size="small">1111</yl-button>
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

  <hr />
</template>

<script setup lange="ts">
import { ref } from "vue";

const iconArrs = [
  "loading",
  "location",
  "location1",
  "plus",
  "arrow-down",
  "arrow-left-bold",
  "arrow-up-bold",
  "arrow-right-bold",
  "logistics-storehouse",
  "sousuo",
  "home",
  "jiazai",
  "jiazai1",
  "minus",
  "search",
  "star",
];
</script>

<style lang="scss">
ul {
  list-style: none;
}
.icons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 90px;

  .item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    .icon-name {
      display: inline-block;
      margin-top: 10px;
    }
  }
}
</style>
