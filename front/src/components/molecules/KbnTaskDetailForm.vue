<template>
  <form>
    <div>
      <label for="task-name">
        タスク名
      </label>
      <input
        id="task-name"
        v-model="task.name"
        type="text"
      >
    </div>
    <div>
      <label for="task-description">
        説明
      </label>
      <textarea
        id="task-description"
        v-model="task.description"
      />
    </div>
    <div>
      <KbnButton
          type="text"
          :disabled="progress"
          @click="handleClick"
      >
        更新
      </KbnButton>
      <p
        v-if="progress"
      >
        更新中...
      </p>
      <p
        v-if="error"
      >
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton.vue'

export default {
  components: {
    KbnButton
  },
  props: {
    task: {
      type: Object,
      required: true,
      default: () => {}
    },
    onUpdate: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      progress: false,
      error: ''
    }
  },
  methods: {
    handleClick(ev) {
      if (this.progress) { return }

      this.progress = true

      this.$nextTick(() => {
        this.onupdate(this.task)
          .catch(err => {
            this.error = err.message
          })
          .then(() => {
            this.progress = false
          })
      })
    }
  }
}

</script>
