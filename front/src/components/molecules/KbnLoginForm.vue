<template>
  <form class="max-w-lg border rounded-lg mx-auto">
    <div class="flex flex-col gap-4 p-4 md:p-8">
      <div>
        <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">メールアドレス</label>  
        <input 
          type="text"
          id="email"
          class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          v-model="email"
        >
      </div>
      <div>
        <label for="password" class="inline-block text-gray-800 text-sm sm:text-base mb-2">パスワード</label>
        <input 
          type="password"
          id="password"
          class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          v-model="password"
        >
      </div>
      <KbnButton
        type="button"
        disabled="disableLoginAction"
        @click="handleClick"
        class="block"
      >
        ログイン
      </KbnButton>
    </div>
  </form>

</template>

<script>
import KbnButton from '../atoms/KbnButton.vue'

export default {
  components: {
    KbnButton
  },
  props: {
    onlogin: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      email: '',
      password: '',
    }

  },
  computed: {
    disableLoginAction() {
      return false
    }
  },
  methods: {
    handleClick() {
      this.onlogin
    }
  }
}

</script>

<style scoped>

</style>
