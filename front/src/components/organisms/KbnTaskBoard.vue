<template>
  <ul class="board-tasks">
    <li
        v-for="list in lists"
        :key="list.id"
    >
      <KbnTaskList v-bind="list" />
    </li>
  </ul>
</template>

<script>
import KbnTaskList from '@/components/organisms/KbnTaskList'

export default {
  components: {
    KbnTaskList
  },
  props: {
    lists: {
      type: Array,
      default: () => []
    }
  }
}


</script>
