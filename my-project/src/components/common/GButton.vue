<script setup lang="ts">
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons-vue";
import { Select as ASelect } from "ant-design-vue";
import { defineProps, ref } from "vue";

interface IProps {
  title: String;
  data: Array<any>;
}
const props = defineProps<IProps>();

const emits = defineEmits(["search", "change"]);
</script>

<template>
  <a-select
    :allowClear="true"
    :placeholder="title"
    :autofocus="true"
    class="select"
    :options="props.data"
    @change="(value, option) => emits('change', value, option)"
  >
    <template #suffixIcon>
      <caret-down-outlined />
    </template>
    <!-- <template #clearIcon>
            <CaretUpOutlined />
        </template> -->
  </a-select>
</template>

<style scoped>
.select {
  width: 180px;
  text-align: left;
}
</style>
