<template>
  <div>
    <nav class="bg-purple-900 text-white flex justify-between">
      <h1 class="px-10 py-4 text-2xl font-bold">Trello風タスク管理</h1>
      <ul class="px-5 py-4 flex space-x-3 text-xl">
        <li class="cursor-pointer">
          <router-link to="/">KbnHome</router-link>
        </li>
        <li class="cursor-pointer">
          <router-link to="/login">KbnLogin</router-link>
        </li>
        <li class="cursor-pointer">
          <router-link to="/tasks">KbnTask</router-link>
        </li>
      </ul>
    </nav>
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>
