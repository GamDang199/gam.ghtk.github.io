<script setup lang="ts">
    import { DatePicker as ADatePicker, RangePicker as ARangePicker } from 'ant-design-vue';
</script>

<template>
    <a-datepicker class="datePicker">
        <a-range-picker
            :placeholder="['Start month', 'End month']"
            format="YYYY-MM-DD"
            show-time
        />
    </a-datepicker>
</template>

<style scoped>
.datePicker {
    width: 180px
}
</style>