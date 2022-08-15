<template>
  <div class="task-detail-modal">
    <div class="wrapper">
      <div class="container">
        <div class="header">
          <KbnIcon
            icon="fa-circle-xmark"
            @click="handleClose"
          />
        </div>
        <div class="body">
          <KbnTaskDetailForm
              :task="task"
              :onupdate="handleUpdate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KbnIcon from '@/components/atoms/KbnIcon'
import KbnTaskDetailForm from '@/components/molecules/KbnTaskDetailForm'

export default {
  components: {
    KbnIcon,
    KbnTaskDetailForm
  },
  computed: {
    task () {
      const id = parseInt(this.$route.params.id)
      return !Number.isNaN(id)
        ? { ...this.$store.getters.getTaskById(id)}
        : {}
    }
  },
  methods: {
    back () {
      this.$router.push({ path: '/' })
    },
    handleClose () {
      this.back()
    },
    handleUpdate (task) {
      return this.$store.dispatch('updateTask', task)
        .then(() => {
          this.back()
        })
        .catch(err => Promise.reject(err))
    },
  }
}
</script>
