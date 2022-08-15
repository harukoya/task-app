<template>
  <div class="board-view">
    <KbnBoardNavigation @click="handleLogout">
      ログアウト
    </KbnBoardNavigation>
    <p
        v-if="progress"
    >
      {{ message }}
    </p>
    <KbnTaskBoard :lists="lists" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import KbnBoardNavigation from '@/components/molecules/KbnBoardNavigation.vue'
import KbnTaskBoard from '@/components/organisms/KbnTaskBoard.vue'

export default {
  componenets: {
    KbnBoardNavigation,
    KbnTaskBoard
  },
  data() {
    return {
      progress: false,
      message: ''
    }
  },
  computed: {
    mapState: {
      lists: state => state.board.lists
    }
  },
  created () {
    this.loadLists()
  },
  methods: {
    setProgress (message) {
      this.progress = true
      this.message = message
    },
    resetProgress () {
      this.progress = false
      this.message = ''
    },
    loadLists () {
      this.setProgress('読み込み中...')

      this.$store.dispatch('fetchLists')
        .catch(err => Promise.reject(err))
        .then(() => {
          this.resetProgress()
        })
    },

    handleLogout () {
      this.setProgress('ログオフ中...')

      return this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({ path: '/logout' })
        })
        .catch(err => Promise.reject(err))
        .then(() => {
          this.resetProgress()
        })
    }
  }
}
</script>
