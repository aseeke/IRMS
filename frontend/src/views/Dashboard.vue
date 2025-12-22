<script setup lang="ts">
import { h, ref, Component } from 'vue'
import { useRouter } from 'vue-router'
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NMenu, NDropdown, NAvatar, NIcon, useMessage, MenuOption } from 'naive-ui'
import { PersonOutline, LogOutOutline, HomeOutline, DesktopOutline, SettingsOutline, PeopleOutline, BusinessOutline } from '@vicons/ionicons5'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()
const message = useMessage()

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '仪表盘',
    key: 'dashboard',
    icon: renderIcon(HomeOutline),
    onClick: () => router.push('/')
  },
  {
    label: '设备管理',
    key: 'device-list',
    icon: renderIcon(DesktopOutline),
    onClick: () => router.push('/device/list')
  },
  {
    label: '用户管理',
    key: 'user-manage',
    icon: renderIcon(PeopleOutline),
    children: [
      {
        label: '部门管理',
        key: 'dept-list',
        onClick: () => router.push('/system/dept')
      },
      {
        label: '办公室管理',
        key: 'office-list',
        onClick: () => {
          console.log('Navigating to Office List')
          router.push('/system/office')
        }
      },
      {
        label: '用户列表',
        key: 'user-list',
        onClick: () => router.push('/system/user')
      }
    ]
  }
]

const userOptions = [
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogOutOutline)
  }
]

const handleUserSelect = (key: string) => {
  if (key === 'logout') {
    userStore.logout()
    message.success('已退出登录')
    router.push('/login')
  }
}
const activeKey = ref<string | null>('dashboard')
</script>

<template>
  <n-layout has-sider class="h-screen">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      class="bg-gray-50 dark:bg-gray-900"
    >
      <div class="h-16 flex items-center justify-center font-bold text-xl text-primary">
        IRMS
      </div>
      <n-menu
        v-model:value="activeKey"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>

    <n-layout>
      <n-layout-header bordered class="h-16 flex items-center justify-between px-6 bg-white dark:bg-gray-800">
        <div class="text-lg font-medium">内部资源管理系统</div>
        <div class="flex items-center gap-4">
          <n-dropdown :options="userOptions" @select="handleUserSelect">
            <div class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors">
              <n-avatar round size="small">
                <n-icon>
                  <PersonOutline />
                </n-icon>
              </n-avatar>
              <span>Admin</span>
            </div>
          </n-dropdown>
        </div>
      </n-layout-header>

      <n-layout-content content-style="padding: 24px;" class="bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-64px)]">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.text-primary {
  color: #18A058;
}
</style>
