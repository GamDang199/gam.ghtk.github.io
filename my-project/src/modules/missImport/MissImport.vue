<script setup lang="ts">
import Sidebar from '../../layout/sidebar/Sidebar.vue';
import MissImportHeader from '../../layout/header/MissImportHeader.vue'
</script>

<template>
   <div class="layout flex">
    <div class="content w-full">
      <div class="header">
        <MissImportHeader />
      </div>
      <div class="main">
        Miss Import
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