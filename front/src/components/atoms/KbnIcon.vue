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
      required: true,
      validator: function (value) {
        return [
          'fa-plus',
          'fa-circle-plus',
          'fa-xmark',
          'fa-circle-xmark'
        ].indexOf(value) !== -1
      }
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  }
}
</script>
