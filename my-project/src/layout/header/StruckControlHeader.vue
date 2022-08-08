<script setup lang="ts">
import {data} from '../../data/data';
import GInput  from '../../components/common/GInput.vue';
import GInfo from '../../components/common/GInfo.vue';
import GDatePicker from '../../components/common/GDatePicker.vue';
import GSearch from '../../components/common/GSearch.vue';
</script>

<template>
<div class="py-5">
    <div class="flex justify-between mx-4 pb-2">
        <h1 class="text-xl">Kiểm soát xe tải</h1>
        <div>
            <g-info :value="item.value" :label="item.label" v-for="(item,index) in data.error" :key="`header-struck-${index}`"/>
        </div>
    </div>
    <div class="flex justify-evenly">
        <g-input title="Xe tải" :options="data.truck"/>
        <g-input title="Tài xế" :options="data.drivers"/>
        <g-input title="Kho" :options="data.warehouse"/>
        <g-input title="Vấn đề Camera" :options="data.problemCamera"/>
        <g-date-picker />
        <g-search />
    </div>
</div>
    
</template>

<style scoped>

</style>