<template>
  <div>
    <div>
      {{ name }}
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
    name: {
      type: String,
      required: true
    }
  },
  
}
</script>
