<template>
  <nav class="bg-purple-900 text-white flex justify-between">
    <h1 class="px-10 py-4 text-2xl font-bold">
      タスク管理
    </h1>
    <ul class="px-5 py-4 flex space-x-3 text-xl">
      <li class="cursor-pointer">
        <KbnButton
          type="text"
          @click="handleClick"
        >
          <slot />
        </KbnButton>
      </li>
    </ul>
  </nav>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton.vue'

export default {
  components: {
    KbnButton
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped>

</style>
