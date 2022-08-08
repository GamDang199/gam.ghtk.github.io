<script setup lang="ts">
import { Button as AButton } from 'ant-design-vue';
import {ref} from 'vue'

interface IProps {
    value: String
    label: String;
}
const props = defineProps<IProps>()

</script>

<template>
    <a-button class="btn-info all" :style="{background: '#32a852',color: 'white'}" v-if='props.value === "Tất cả"'>
       {{props.value}} ({{props.label}})
    </a-button>
    <a-button class="btn-info item" v-else :style="{color: '#32a852', background: '#d7dade'}">
       {{props.value}} ({{props.label}})
    </a-button>
</template>

<style scoped>
.btn-info {
    border-radius: 20px;
    outline: none;
    margin-right: 5px;
    border: none;
}
</style>