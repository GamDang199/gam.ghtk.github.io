<script setup lang="ts">
import Sidebar from '../../layout/sidebar/Sidebar.vue';
import RuleHeader from '../../layout/header/RuleHeader.vue';
</script>

<template>
   <div class="layout flex">
    <div class="content w-full">
      <div class="header">
        <RuleHeader />
      </div>
      <div class="main">
        5s And Rule
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