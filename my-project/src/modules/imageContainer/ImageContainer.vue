<script setup lang="ts">
import Sidebar from '../../layout/sidebar/Sidebar.vue';
import ImageContainerHeader from '../../layout/header/ImageContainerHeader.vue';
</script>

<template>
   <div class="layout flex">
    <div class="content w-full">
      <div class="header">
        <ImageContainerHeader />
        <g-date />
      </div>
      <div class="main">
       Image Container
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