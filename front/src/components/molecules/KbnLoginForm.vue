<template>
  <form class="max-w-lg border rounded-lg mx-auto mt-10">
    <div class="flex flex-col gap-4 p-4 md:p-8">
      <p v-if="noticeMessage">
        {{ noticeMessage }}
      </p>
      <div>
        <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">メールアドレス</label>  
        <input 
          type="text"
          id="email"
          class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          autocomplete="off"
          placeholder="例： kanban@domain.com"
          v-model="email"
          @focus="resetError"
        >
        <ul class="validation-errors">
          <li v-if="!validation.email.format">メールアドレスの形式が不正です。</li>
          <li v-if="!validation.email.required">メールアドレスが入力されていません。</li>
        </ul>
      </div>
      <div>
        <label for="password" class="inline-block text-gray-800 text-sm sm:text-base mb-2">パスワード</label>
        <input 
          type="password"
          id="password"
          class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          autocomplete="off"
          placeholder="例： xxxxxxx"
          v-model="password"
          @focus="resetError"
        >
        <ul class="validation-errors">
          <li v-if="!validation.password.required">パスワードが入力されていません。</li>
        </ul>
      </div>
      <KbnButton
        :disabled="disableLoginAction"
        @click="handleClick"
        class="block"
      >
        ログイン
      </KbnButton>
      <p
        v-if="progress"
      >
        ログイン中
      </p>
      <p
        v-if="error"
        class="login-error"
      >
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script>
import KbnButton from '../atoms/KbnButton.vue'
import { REGEX_EMAIL } from '@/module/EmailValidater'

const required = val => !!val.trim()

export default {
  components: {
    KbnButton
  },
  props: {
    onlogin: {
      type: Function,
      required: true
    },
  },
  data() {
    return {
      email: '',
      password: '',
      progress: false,
      error: '',
    }

  },
  computed: {
    validation() {
      return {
        email: {
          required: required(this.email),
          format: REGEX_EMAIL.test(this.email)
        },
        password: {
          required: required(this.password)
        }
      }
    },
    valid() {
      const validation = this.validation
      const fields = Object.keys(validation)
      let valid = true
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i]
        valid = Object.keys(validation[field]).every(key => validation[field][key])
        if (!valid) { break }
      }
      return valid
    },
    disableLoginAction() {
      return !this.valid || this.progress
    },
    noticeMessage() {
      const message = this.$store.getters.getNoticeMessage
      this.$store.dispatch('clearNoticeMessage')
      return message
    }
  },
  methods: {
    resetError() {
      this.error = ''
    },
    handleClick() {
      if (this.disableLoginAction) { return }

      this.progress = true
      this.error = ''

      this.$nextTick(() => {
        this.onlogin({ email: this.email, password: this.password })
          .catch(error => {
            this.error = error.message
          })
          .then(() => {
            this.progress = false
          })
      })
    }
  },
}

</script>

<style scoped>

</style>
