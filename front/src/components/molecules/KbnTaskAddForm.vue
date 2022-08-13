<template>
  <form>
    <div class="form-item">
      <label for="task-name">タスク名</label>
      <input
          id="task-name"
          type="text"
          v-model="taskName"
      >
    </div>
    <div class="form-item">
      <label for="task-description">説明</label>
      <textarea
          id="task-description"
          v-model="taskDescription"
      />
    </div>
    <div class="form-action">
      <KbnButton
          type="text"
          :disabled="disableAddAction"
          @click="handleAdd"
      >
        追加
      </KbnButton>
      <KbnButton
          type="text"
          :disabled="progress"
          @click="handleCancel"
      >
        キャンセル
      </KbnButton>
    </div>
    <div class="message">
      <p
          v-if="progress"
      >
        追加中
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
    listId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      name: '',
      progress: false,
      error: ''
    }
  },
  computed: {
    disableAddAction() {
      return this.name.length === 0 || this.progress
    }
  },
  methods: {
    handleAdd() {
      this.progress = true
      this.error = ''

      const { name, listId } = this
      return this.$store.dispatch('addTask', { name, listId })
              .then(() => {
                this.$emit('close')
              })
              .catch(err => {
                this.error = err.message
              })
              .then(() => {
                this.progress = false
              })
    },

    handleCancel() {
      this.$emit('close')
    }
  }
}
</script>
