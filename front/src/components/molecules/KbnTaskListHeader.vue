<template>
  <div>
    <div class="title">
      <h2>{{ taskListHeaderName }}</h2>
    </div>
    <div class="plusIcon">
      <KbnIcon 
        @click="$emit('add')"
        icon="fa-plus"
      ></KbnIcon>
    </div>
  </div>
  
</template>

<script>
import KbnIcon from '@/components/atoms/KbnIcon.vue'

export default {
  components: {
    KbnIcon,
  },
  props: {
    taskListHeaderName: {
      type: String,
      required: true
    }
  },

}
</script>
