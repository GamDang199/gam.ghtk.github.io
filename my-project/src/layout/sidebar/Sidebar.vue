<script setup lang="ts">
import {
  SearchOutlined,
  UserOutlined ,
  CaretDownOutlined,
  RightOutlined,
  CaretUpOutlined
} from '@ant-design/icons-vue';
import { ref } from 'vue';
import {menu} from '../../data/menu';

const isShow = ref(false);

const handleOpenSubNav = (e: any) => { 
  isShow.value = !isShow.value
}

</script>

<template>
    <div class="sidebar shrink-0">
      <h1>Cần xử lý</h1>
      <div class="navbar" >
        <div class="nav-item"  v-for="(item, index) in menu" :key="`nav-item-${index}`">
        
          <div v-if="!item.children" class="nav flex justify-between">
            <router-link :to="item.path" class="routerLink">{{item.name}}</router-link>
          </div>
        
          <div v-else class="nav1">
            <div class="nav flex justify-between">
              <span>{{item.name}}</span>
              <span @click="handleOpenSubNav">
                <CaretDownOutlined v-if="item.icon === 'CaretDownOutlined' && !isShow"/>
                <CaretUpOutlined v-else/>
              </span>
            </div>
            <div v-if="item.children" class="sub-menu" :class="{subMenuHidden: !isShow}">
              <div class="navChild py-3" v-for="(item2, index) in item.children" :key="`nav-item2-${index}`">
                <router-link :to="item2.path" class="routerLink">{{item2.name}}</router-link>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
</template>

<style scoped>
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

.nav {
  padding: 10px 20px;
  border-top: 1px solid grey;
  font-weight: 500;
}

.nav:hover{
  background: #D1F8F3;
}

.sub-menu {
  max-height: 200px;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
}

.sub-menu.subMenuHidden {
  max-height: 0;
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

a.routerLink {
    color: black;
}
</style>