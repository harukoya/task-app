<template>
  <div>
    <v-fa
      :icon="icon"
      @click="handleClick"
      :style="{cursor: 'pointer'}"
    />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  }
}
</script>
