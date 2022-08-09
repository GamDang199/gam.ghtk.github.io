<script setup lang="ts">
import Sidebar from '../../layout/sidebar/Sidebar.vue';
import MissExportHeader from '../../layout/header/MissExportHeader.vue'

</script>

<template>
   <div class="layout flex">
    <div class="content w-full">
      <div class="header">
        <MissExportHeader />
      </div>
      <div class="main">
        Miss Export
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