<template>
  <div>
    <KbnBoardNavigation @click="userRegistration">
      ユーザ登録
    </KbnBoardNavigation>
    <KbnLoginForm :onlogin="handleLogin" />
  </div>
</template>

<script>
import KbnBoardNavigation from '@/components/molecules/KbnBoardNavigation.vue'
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue'

export default {
  components: {
    KbnBoardNavigation,
    KbnLoginForm
  },
  methods: {
    handleLogin(authInfo) {
      return this.$store.dispatch('login', authInfo)
        .then(() => {
          this.$router.push({ path: '/' })
        })
        .catch(error => this.throwReject(error))
    },
    throwReject (error) { return Promise.reject(error) },
    userRegistration() {
      this.$router.push({ path: '/sign_up' })
    }
  }
}
</script>
