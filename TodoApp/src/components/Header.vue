<template>
  <header class="container mx-auto mt-12">
    <div class="header">
    <h2 class="text-white inline-block">Manage <b>Employees</b></h2>
    <div class="Header__ButtonList inline-block float-right w-1/4">
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">Delete
      </button>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">Add
        New Employees
      </button>
    </div>
  </div>
  </header>
</template>
<script setup>
</script>
<style scoped>
h2 {
  margin: 5px 0 0;
  font-size: 24px;
}
.header__ButtonList button {
  outline: none;
  margin-left: 5%;
}
.header {
  background: #435d7d;
  color: #fff;
  padding: 16px 30px;
  min-width: 100%;
  border-radius: 3px 3px 0 0;
}
</style>