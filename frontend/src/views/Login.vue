<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { NForm, NFormItem, NInput, NButton, NCard, useMessage } from 'naive-ui'

const router = useRouter()
const userStore = useUserStore()
const message = useMessage()

const formValue = ref({
  username: '',
  password: ''
})

const loading = ref(false)

const handleLogin = async () => {
  if (!formValue.value.username || !formValue.value.password) {
    message.warning('请输入用户名和密码')
    return
  }
  
  loading.value = true
  try {
    await userStore.login({
      username: formValue.value.username,
      password: formValue.value.password
    })
    message.success('登录成功')
    router.push('/')
  } catch (error) {
    // Error handled in request interceptor
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden">
    <!-- Left Side -->
    <div class="hidden w-1/2 flex-col justify-center items-center bg-primary text-white p-10 md:flex">
      <div class="text-6xl font-bold mb-4">IRMS</div>
      <div class="text-2xl opacity-90">内部资源管理系统</div>
      <div class="mt-10 text-lg opacity-80">
        设备追踪 • 网络可视化 • 责任明确
      </div>
    </div>

    <!-- Right Side -->
    <div class="w-full flex justify-center items-center p-10 md:w-1/2 bg-gray-50 dark:bg-gray-900">
      <n-card class="max-w-md w-full shadow-lg rounded-xl" size="huge" :bordered="false">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white">欢迎回来</h2>
          <p class="text-gray-500 mt-2">请登录您的账号</p>
        </div>

        <n-form
          ref="formRef"
          :model="formValue"
          size="large"
        >
          <n-form-item label="用户名" path="username">
            <n-input v-model:value="formValue.username" placeholder="请输入用户名 (默认 admin)" @keyup.enter="handleLogin" />
          </n-form-item>
          <n-form-item label="密码" path="password">
            <n-input
              v-model:value="formValue.password"
              type="password"
              show-password-on="click"
              placeholder="请输入密码 (默认 admin123)"
              @keyup.enter="handleLogin"
            />
          </n-form-item>
          <div class="mb-6">
            <n-button
              type="primary"
              block
              :loading="loading"
              @click="handleLogin"
              class="bg-primary hover:bg-green-600"
            >
              登录
            </n-button>
          </div>
        </n-form>
      </n-card>
    </div>
  </div>
</template>

<style scoped>
.bg-primary {
  background-color: #18A058;
}
</style>
