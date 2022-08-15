<template>
  <div>
    <div class="title">
      <h2>{{ name }}</h2>
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
    name: {
      type: String,
      required: true
    }
  },

}
</script>
