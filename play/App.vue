<template>
  <yl-button type="primary" disabled>hello</yl-button>
  <yl-icon name="loading"></yl-icon>
  <hr />
  <yl-row>
    <yl-col :span="6"><div :style="{ backgroundColor: 'red' }">1</div></yl-col>
    <yl-col :span="6"
      ><div :style="{ backgroundColor: 'green' }">1</div></yl-col
    >
    <yl-col :span="6"><div :style="{ backgroundColor: 'red' }">1</div></yl-col>
  </yl-row>

  <yl-row :gutter="10">
    <yl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" :offset="9"
      ><div :style="{ backgroundColor: 'red' }">1</div></yl-col
    >
    <!-- <yl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11" offset="2"
      ><div :style="{ backgroundColor: 'red' }">2</div></yl-col
    >
    <yl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11" offset="2"
      ><div :style="{ backgroundColor: 'red' }">3</div></yl-col
    > -->
    <yl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" :offset="9"
      ><div :style="{ backgroundColor: 'red' }">4</div></yl-col
    >
  </yl-row>

  <yl-button class="ml" size="large">Large</yl-button>
  <yl-button class="ml" size="medium">Default</yl-button>
  <yl-button class="ml" size="small">Small</yl-button>
  <yl-button class="ml" size="mini">Mini</yl-button>
  <yl-button icon="search" circle class="ml" size="small"></yl-button>
  <!-- <hr />
  <h1>Button和Icon测试</h1>

  <yl-button size="large" round disabled></yl-button>
  <yl-button round type="success" size="medium"></yl-button>
  <yl-button round type="success"></yl-button>
  <yl-button round type="info" size="small"></yl-button>
  <yl-button icon="search">搜索</yl-button>

  <yl-button icon="search" round>搜索</yl-button>

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
  </yl-row> -->


  <br></br>
  <h2>checkbox测试</h2>
  <span> {{ checkValue}}</span>
  <!-- <yl-checkbox label="选项1" v-model="checkValue" @change="handleChange"></yl-checkbox> -->
  <yl-checkbox :indeterminate="true" v-model="checkValue">半选</yl-checkbox>
  <yl-checkbox disabled :indeterminate="true">disabled</yl-checkbox>
  <yl-checkbox disabled checked>disabled</yl-checkbox>
</template>

<script setup lange="ts">
import { ref } from "vue";
const checkValue=ref(false)

function handleChange(e) {
  console.log(e);
  // alert(e)
}
</script>

<style lang="scss"></style>
