<script setup lang="ts">
import {
  SearchOutlined,
  UserOutlined ,
  CaretDownOutlined,
  RightOutlined
} from '@ant-design/icons-vue';
import GButton from "./components/common/GButton.vue";
import GDatePicker from './components/common/GDatePicker.vue';
import GSearch from './components/common/GSearch.vue';
import { ref } from 'vue';
import {data} from './data/data';
import {menu} from './data/menu';

const isShow = ref(false);
const handleOpenSubNav = (e: any) => { 
  isShow.value = !isShow.value
}

</script>

<template>
  <div class="layout flex">
    <div class="content w-full">
      <div class="header">
        header
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>

    <!-- Sidebar -->
    <div class="sidebar shrink-0">
      <h1>Cần xử lý</h1>
      <div class="navbar" >
        <div class="nav-item"  v-for="(item, index) in menu" :key="`nav-item-${index}`">
        
          <div v-if="!item.children" class="nav flex justify-between">
            <span>{{item.name}}</span>
            <span>
              <CaretDownOutlined v-if="item.icon === 'CaretDownOutlined'"/>
            </span>
          </div>
        
          <div v-else>
            <div class="nav flex justify-between">
              <span>{{item.name}}</span>
              <span @click="handleOpenSubNav">
                <CaretDownOutlined v-if="item.icon === 'CaretDownOutlined'"/>
              </span>
            </div>
            <div v-if="item.children" :class="{hidden: isShow}">
              <div class="navChild py-3" v-for="(item2, index) in item.children" :key="`nav-item2-${index}`">
                <span>{{item2.name}}</span>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
  <!-- <a-layout>
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: 'white', borderRight: '1px solid grey', width: '25vw'}">
        <h1>Cần xử lý</h1>
        <a-menu mode="inline" v-model:selectedKeys="selectedKeys" v-for="item in menu">
          <a-menu-item key="" :style="{ borderTop: '1px solid grey'}">
            
            <span class="nav-text">{{item.name}}</span>
          </a-menu-item>
        </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', paddingTop: '25px', paddingBottom: '25px' }">
        <div class="flex justify-around">
          <g-button title="Xe tai" :data="data.truck"/>
          <g-button title="Tai xe" :data="data.drivers"/>
          <g-button title="Kho" :data="data.warehouse"/>
          <g-button title="Van de camera" :data="data.problemCamera"/>
          <g-date-picker />
          <g-search />
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
     
  </a-layout> -->
</template>

<style scoped>
.layout {
  border-right: 1px solid black;
}

.sidebar {
  width: 320px;
  min-height: 100vh;
  margin-left: 0;
  border-left: 1px solid grey;
}

.sidebar h1 {
  padding-left: 20px;
  font-weight: bold;
}

.hidden {
  transition: all 2s ease-in-out;
}

.nav {
  padding: 10px 20px;
  border-top: 1px solid grey;
  font-weight: 500;
}

.nav:hover{
  background: #D1F8F3;
}

.navChild {
  padding: 10px 20px;
  border-top: 1px solid grey;
  font-weight: 500;
}

.navChild:hover{
  background: #D1F8F3;
}

.nav-item:last-child {
  border-bottom: 1px solid grey;
}

li.nav-item:hover {
  background: #D1F8F3;
}




</style>
