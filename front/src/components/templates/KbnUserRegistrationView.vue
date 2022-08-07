<template>
  <div>
    <KbnBoardNavigation @click="linkToLogin">
      サインイン
    </KbnBoardNavigation>
    <KbnUserRegistrationForm :onUserRegistration="handleUserRegistration"/>
  </div>
</template>

<script>
import KbnBoardNavigation from '@/components/molecules/KbnBoardNavigation.vue'
import KbnUserRegistrationForm from '@/components/molecules/KbnUserRegistrationForm.vue'

import user_api from '@/api/user'

export default {
  components: {
    KbnBoardNavigation,
    KbnUserRegistrationForm
  },
  methods: {
    linkToLogin() {
      this.$router.push({ path: 'login' })
    },
    handleUserRegistration(userInfo) {
      return user_api.signUp(userInfo)
        .then((res) => {
          this.$router.push({ path: '/login' })
          this.$store.dispatch('setMessage', { notice: `${res.email}に届いたメールにてメールアドレスの認証をお願いします`})
        })
        .catch(error => {
          console.log(error)
          this.$store.dispatch('setMessage', { error })
        })

    }
  }
}
</script>
