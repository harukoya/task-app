<template>
  <form class="max-w-lg border rounded-lg mx-auto mt-10">
    <div class="flex flex-col gap-4 p-4 md:p-8">
      <div>
        <label for="userName" class="inline-block text-gray-800 text-sm sm:text-base mb-2">名前</label>  
        <input 
          type="text"
          id="userName"
          class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          autocomplete="off"
          placeholder="例： タスク 太郎"
          v-model="userName"
          @focus="resetError"
        >
        <ul class="validation-errors">
          <li v-if="!validation.userName.required">名前を入力してください。</li>
        </ul>
      </div>
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
          <li v-if="!validation.email.required">メールアドレスを入力してください。</li>
          <li v-if="!validation.email.format">メールアドレスの形式が不正です。</li>
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
          <li v-if="!validation.password.required">パスワードを入力してください。</li>
        </ul>
      </div>
      <div>
        <label for="password_confirmation" class="inline-block text-gray-800 text-sm sm:text-base mb-2">パスワード（確認用）</label>
        <input 
          type="password"
          id="password_confirmation"
          class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          autocomplete="off"
          placeholder="例： xxxxxxx"
          v-model="password_confirmation"
          @focus="resetError"
        >
        <ul class="validation-errors">
          <li v-if="!validation.password_confirmation.format">入力されたパスワードが一致しません。</li>
        </ul>
      </div>
      <KbnButton
        :disabled="disableRegistrationAction"
        @click="handleClick"
        class="block"
      >
        ユーザ登録
      </KbnButton>
      <p
        v-if="progress"
      >
        処理中
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
import KbnButton from "../atoms/KbnButton.vue"
import { REGEX_EMAIL } from "@/module/EmailValidater"

const required = val => !!val.trim()

export default {
  components: {
    KbnButton,
  },
  props: {
    onUserRegistration: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      password_confirmation: '',
      error: '',
      progress: false
    }
  },
  computed: {
    validation() {
      return {
        userName: {
          required: required(this.userName),
        },
        email: {
          required: required(this.email),
          format: REGEX_EMAIL.test(this.email)
        },
        password: {
          required: required(this.password)
        },
        password_confirmation: {
          required: required(this.password_confirmation),
          format: this.password === this.password_confirmation
        }
      }
    },
    valid() {
      const validation = this.validation
      const fields = Object.keys(validation)

      let valid = true
      for(let i = 0; i < fields.length; i++) {
        const field = fields[i]
        valid = Object.keys(validation[field]).every(key => validation[field][key])
        if (!valid) { break }
      }
      return valid
    },
    disableRegistrationAction() {
      return !this.valid || this.progress
    },
  },
  methods: {
    resetError() {
      this.error = ''
    },
    handleClick() {
      if (this.disableRegistrationAction) { return }

      this.progress = true
      this.error = ''

      this.$nextTick(() => {
        this.onUserRegistration({ name: this.userName, email: this.email, password: this.password, password_confirmation: this.password_confirmation })
          .catch(error => {
            this.error = error.message
          })
          .then(() => {
            this.progress = false
          })
      })
    },
  },
}

</script>
