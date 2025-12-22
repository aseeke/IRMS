<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { NCard, NGrid, NGridItem, NStatistic, NNumberAnimation, NIcon, NProgress, NList, NListItem, NSpace, useMessage } from 'naive-ui'
import { ServerOutline, HardwareChipOutline, AnalyticsOutline } from '@vicons/ionicons5'
import { useRouter } from 'vue-router'
import request from '../../utils/request'

const router = useRouter()

const message = useMessage()
const stats = ref({
  deviceCount: 0,
  ipUsage: [] as any[],
  ipBindingDist: [] as any[]
})
const loading = ref(false)

const aggregatedIpBinding = ref<{ ipCount: string, deviceCount: number }[]>([])

const fetchStats = async () => {
  loading.value = true
  try {
    const res: any = await request.get('/dashboard/stats')
    stats.value = res
    aggregatedIpBinding.value = res.ipBindingDist || []
  } catch (error) {
    message.error('获取仪表盘数据失败')
  } finally {
    loading.value = false
  }
}

const handleSubnetClick = (subnet: string) => {
    // Remove x or X suffix but keep the dot to ensure subnet matching (e.g. 192.168.1. vs 192.168.10)
    const cleanSubnet = subnet.replace(/[xX]$/, '')
    router.push({ path: '/device/list', query: { ipAddress: cleanSubnet } })
}

const handleBindingClick = (item: any) => {
    if (item.ipCount === '>=4' || item.ipCount === '4+') {
         router.push({ path: '/device/list', query: { minIpCount: 4 } })
    } else {
         router.push({ path: '/device/list', query: { ipCount: item.ipCount } })
    }
}

onMounted(() => {
  fetchStats()
})
</script>

<template>
  <div class="space-y-6">
    <n-grid :x-gap="12" :y-gap="12" cols="1 200:1 600:2 800:3">
      <n-grid-item>
        <n-card :bordered="false" class="rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow" @click="router.push('/device/list')">
          <n-statistic label="设备总量">
            <template #prefix>
              <n-icon class="text-primary">
                <ServerOutline />
              </n-icon>
            </template>
            <n-number-animation :from="0" :to="stats.deviceCount" />
          </n-statistic>
        </n-card>
      </n-grid-item>
       <!-- Add breakdown cards if needed, e.g. Intranet vs Extranet, by filtering stats or adding new stats -->
    </n-grid>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <n-card title="IP 地址使用情况 (点击查看详情)" :bordered="false" class="rounded-xl shadow-sm">
        <n-list>
          <n-list-item v-for="(item, index) in stats.ipUsage" :key="index" class="cursor-pointer hover:bg-gray-50 p-2 rounded" 
             @click="handleSubnetClick(item.subnet)">
            <div class="mb-2 flex justify-between">
              <span>{{ item.subnet }}</span>
              <span class="text-gray-500 text-sm">已用: {{ item.used }} / {{ item.total }} ({{ item.usageRate }}%)</span>
            </div>
            <n-progress
              type="line"
              :percentage="Number(item.usageRate)"
              :color="Number(item.usageRate) > 80 ? '#d03050' : '#18a058'"
              processing
            />
          </n-list-item>
          <div v-if="stats.ipUsage.length === 0" class="text-center text-gray-400 py-4">暂无数据</div>
        </n-list>
      </n-card>

      <n-card title="人员 IP 使用分布 (点击查看详情)" :bordered="false" class="rounded-xl shadow-sm">
        <div class="space-y-4">
          <div v-for="(item, index) in aggregatedIpBinding" :key="index" class="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded"
             @click="handleBindingClick(item)">
            <div class="w-24 text-right whitespace-nowrap">使用 {{ item.ipCount }} 个 IP</div>
            <div class="flex-1">
               <n-progress
                  type="line"
                  :percentage="Math.min((item.deviceCount / stats.deviceCount) * 100, 100)"
                  :show-indicator="false"
                  color="#2080f0"
               />
            </div>
            <div class="w-16">{{ item.deviceCount }} 人</div>
          </div>
           <div v-if="aggregatedIpBinding.length === 0" class="text-center text-gray-400 py-4">暂无数据</div>
        </div>
      </n-card>
    </div>
  </div>
</template>

<style scoped>
.text-primary {
  color: #18A058;
}
</style>
