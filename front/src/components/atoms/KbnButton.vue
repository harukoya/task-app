<template>
  <button
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    btnType: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      if (this.btnType === 'text') {
        return [
          'border-none underline p-1'
        ]
      } else {
        if (this.disabled != true) {
          return [
            'text-white border-2 border-green-500 bg-green-500 rounded p-1'
          ]
        } else {
          return [
            'text-white border-2 border-gray-500 bg-gray-500 rounded p-1'
          ]
        }
      }
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

