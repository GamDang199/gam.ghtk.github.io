<script setup lang="ts">
import {data} from '../../data/data';
import GInput  from '../../components/common/GInput.vue';
import GDate from '../../components/common/GDatePicker.vue';
import GSearch from '../../components/common/GSearch.vue';
</script>

<template>
<div class="py-5">
    <div class="mx-4 pb-2">
        <h1 class="text-xl">5s And Rules</h1>
    </div>
    <div class="flex justify-evenly">
        <g-input title="Xe tải" :options="data.truck"/>
        <g-input title="Tài xế" :options="data.drivers"/>
        <g-input title="Kho" :options="data.warehouse"/>
        <g-input title="Vấn đề Camera" :options="data.problemCamera"/>
        <g-date />
        <g-search />
    </div>
</div>
    
</template>

<style scoped>

</style>