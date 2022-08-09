<script setup lang="ts">
import Sidebar from '../../layout/sidebar/Sidebar.vue';
import GTCLostHeader from '../../layout/header/GTCLostHeader.vue';
</script>

<template>
   <div class="layout flex">
    <div class="content w-full">
      <div class="header">
        <GTCLostHeader />
      </div>
      <div class="main">
        GTC Lost
      </div> 
    </div>
    <Sidebar />
  </div>
</template>

<style scoped>
.layout {
  border-right: 1px solid black;
}
</style>