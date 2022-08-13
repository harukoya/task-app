<template>
  <div>
    <div>
      {{ taskName }}
      <KbnIcon
        icon="fa-xmark"
        @click="$emit('click')"
      />
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
    taskName: {
      type: String,
      required: true
    }
  },
  
}
</script>
