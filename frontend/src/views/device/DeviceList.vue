<script setup lang="ts">
import { ref, onMounted, h, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { NCard, NDataTable, NButton, NTag, useMessage, NModal, NForm, NFormItem, NInput, NSelect, NTreeSelect, NDynamicInput, NInputNumber, NSpace, NIcon, NInputGroup, NTooltip, NDivider, NCollapseTransition } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import request from '../../utils/request'
import { LaptopOutline, GlobeOutline, WifiOutline, CloudOutline, HardwareChipOutline, ChevronDownOutline, ChevronUpOutline } from '@vicons/ionicons5'

const message = useMessage()
const loading = ref(false)
const data = ref([])
const showModal = ref(false)
const addLoading = ref(false)
const exportLoading = ref(false)
const showAdvanced = ref(false)

// Options
const deptOptions = ref([])
const officeOptions = ref([])
const modalUserOptions = ref([])

const query = reactive({
  fuzzy: '',
  ownerName: '',
  ipAddress: '',
  ipAddress2: '',
  deptId: null as number | null,
  minIpCount: null as number | null,
  ipCount: null as number | null,
  netType: null as number | null,
  macAddress: '',
  officeId: null as number | null
})

const netTypeOptions = [
  { label: '内网', value: 0 },
  { label: '外网', value: 1 }
]

const isReadOnly = ref(true)
const userForm = reactive({
  userId: null as number | null,
  userName: '',
  deptName: '',
  officeName: '',
  status: '0' // User status
})

const devicesForm = ref<any[]>([])

const statusOptions = [
  { label: '在用', value: '1' },
  { label: '入库', value: '2' },
  { label: '报修', value: '3' },
  { label: '报废', value: '4' }
]

const columns: DataTableColumns<any> = [
  { 
    title: '使用人', 
    key: 'owner',
    width: 150,
    render(row) {
      const name = row.owner?.nickName || '未分配'
      const office = row.office?.officeName ? ` (${row.office.officeName})` : ''
      return name + office
    }
  },
  { title: '设备名称', key: 'deviceName', width: 150, ellipsis: true },
  { 
    title: '设备型号', 
    key: 'model',
    width: 120,
    ellipsis: true,
    render(row) {
      return h(NTag, { type: 'info', bordered: false, size: 'small' }, { default: () => row.model || '无' })
    }
  },
  {
    title: 'IP 数量',
    key: 'network',
    width: 100,
    render(row) {
        let count = 0
        if (row.networkMacs) {
            row.networkMacs.forEach((mac: any) => {
                count += (mac.ips || []).length
            })
        }
        if (row.networkIps) {
            const unassociatedIps = row.networkIps.filter((ip: any) => !ip.macId)
            count += unassociatedIps.length
        }
        
        if (count === 0) return '-'
        return h(NTag, { type: 'success', bordered: false, size: 'small' }, { default: () => `IP: ${count} 个` })
    }
  },
  {
    title: '操作',
    key: 'actions',
    width: 80,
    render(row) {
      return h(NButton, { size: 'small', onClick: () => handleView(row) }, { default: () => '查看' })
    }
  }
]

const spanMethod = ({ row, column, rowIndex }: any) => {
  if (['owner', 'actions'].includes(column.key)) {
    const ownerId = row.ownerId
    if (!ownerId) return { rowspan: 1, colspan: 1 }
    
    // Check if previous row has same ownerId
    if (rowIndex > 0 && data.value[rowIndex - 1].ownerId === ownerId) {
      return { rowspan: 0, colspan: 0 }
    }
    
    // Calculate rowspan
    let rowspan = 1
    for (let i = rowIndex + 1; i < data.value.length; i++) {
      if (data.value[i].ownerId === ownerId) {
        rowspan++
      } else {
        break
      }
    }
    return { rowspan, colspan: 1 }
  }
}

const loadOptions = async () => {
  try {
    const depts: any = await request.get('/system/dept/tree')
    deptOptions.value = depts
    
    const offices: any = await request.get('/biz/office/all')
    officeOptions.value = offices.map((o: any) => ({ label: o.officeName, value: o.id }))

    const users: any = await request.get('/system/user/list', { params: { pageSize: 1000 } })
    modalUserOptions.value = users.records.map((u: any) => ({ 
        label: u.nickName, 
        value: u.id,
        deptName: u.dept?.deptName || '无部门',
        officeName: u.office?.officeName || '无办公室'
    }))
  } catch (e) {}
}

const fetchData = async () => {
  loading.value = true
  try {
    const res: any = await request.get('/biz/device/list', { params: { ...query, pageSize: 1000 } })
    // Sort by ownerId to make spanMethod work
    data.value = res.records.sort((a: any, b: any) => (a.ownerId || 0) - (b.ownerId || 0))
  } catch (error) {
    message.error('获取设备列表失败')
  } finally {
    loading.value = false
  }
}

const handleExport = async () => {
  exportLoading.value = true
  try {
    const res = await request.get('/biz/device/export', { params: query, responseType: 'blob' })
    const url = window.URL.createObjectURL(new Blob([res as any]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', '设备列表.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    message.success('导出成功')
  } catch (error) {
    message.error('导出失败')
  } finally {
    exportLoading.value = false
  }
}

// Removed auto-populate watch as we now use batch mode

const handleAdd = () => {
  isReadOnly.value = false
  userForm.userId = null
  userForm.userName = ''
  userForm.deptName = ''
  userForm.officeName = ''
  devicesForm.value = [createEmptyDevice()]
  showModal.value = true
}

const createEmptyDevice = () => ({
  device: {
    deviceName: '',
    deviceCode: '',
    model: '',
    status: '1',
    remark: ''
  },
  macs: [{ macName: 'eth0', macAddress: '', ips: [{ ipAddress: '', netType: 0 }] }]
})

const handleView = async (row: any) => {
  const userId = row.ownerId
  if (!userId) {
      message.warning('该设备未分配用户')
      return
  }
  loading.value = true
  try {
      const res: any = await request.get(`/biz/device/user/${userId}`)
      devicesForm.value = res.map((d: any) => ({
          device: d.device,
          macs: d.macs.map((m: any) => ({
              macName: m.macName,
              macAddress: m.macAddress,
              ips: m.ips ? m.ips.map((i: any) => ({ ipAddress: i.ipAddress, netType: i.netType })) : []
          }))
      }))
      
      // Populate user info
      userForm.userId = userId
      userForm.userName = row.owner?.nickName || ''
      userForm.deptName = row.dept?.deptName || ''
      userForm.officeName = row.office?.officeName || ''
      
      isReadOnly.value = true
      showModal.value = true
  } catch(e) {
      message.error('获取详情失败')
  } finally {
      loading.value = false
  }
}

const onCreateMac = () => {
    return { macName: 'eth0', macAddress: '', ips: [{ ipAddress: '', netType: 0 }] }
}

const onCreateIp = () => {
    return { ipAddress: '', netType: 0 }
}

const submitAdd = async () => {
  if (!userForm.userId) {
    message.warning('请选择用户')
    return
  }
  addLoading.value = true
  try {
    const payload = {
      userId: userForm.userId,
      devices: devicesForm.value.map(d => ({
        device: { ...d.device, ownerId: userForm.userId },
        macs: d.macs.map((m: any) => ({
          ...m,
          ips: m.ips.filter((i: any) => i.ipAddress).map((i: any) => ({ ...i, status: '1', type: '1' }))
        }))
      }))
    }
    
    await request.post('/biz/device/batch', payload)
    
    message.success('保存成功')
    showModal.value = false
    fetchData()
  } catch (error) {
  } finally {
    addLoading.value = false
  }
}

const addDevice = () => {
    devicesForm.value.push(createEmptyDevice())
}

const removeDevice = (index: number) => {
    devicesForm.value.splice(index, 1)
}

const addIp = (mac: any) => {
    mac.ips.push(onCreateIp())
}

const removeIp = (mac: any, index: number) => {
    mac.ips.splice(index, 1)
}

watch(() => userForm.userId, (newVal) => {
    if (newVal && !isReadOnly.value) {
        const user = modalUserOptions.value.find((u: any) => u.value === newVal)
        if (user) {
            userForm.userName = user.label
            userForm.deptName = user.deptName
            userForm.officeName = user.officeName
        }
    }
})

// Check for router params on mount (Drill down)
const route = useRoute()

const parseQuery = () => {
    // Reset defaults first to avoid stuck filters
    query.minIpCount = null
    query.ipCount = null
    query.ipAddress = ''
    
    if (route.query.netType) {
        query.netType = Number(route.query.netType)
    }
    if (route.query.minIpCount) {
        query.minIpCount = Number(route.query.minIpCount)
    }
    if (route.query.ipCount) {
        query.ipCount = Number(route.query.ipCount)
    }
    if (route.query.ipAddress) {
        query.ipAddress = String(route.query.ipAddress)
    }
}

onMounted(() => {
  loadOptions()
  parseQuery()
  fetchData()
})

watch(() => route.query, () => {
    parseQuery()
    fetchData()
}, { deep: true })
</script>
<template>
  <div class="space-y-4">
    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-center">
         <h2 class="text-2xl font-bold text-gray-800 dark:text-white">设备管理</h2>
      </div>
      
      <!-- Search Bar -->
      <n-card :bordered="false" class="rounded-xl shadow-sm bg-gray-50/50">
        <n-space vertical>
           <!-- Primary Search Row -->
           <n-space>
             <n-input v-model:value="query.fuzzy" placeholder="模糊搜索 (名称/型号/备注)" class="w-64" clearable />
             <n-input v-model:value="query.ownerName" placeholder="用户姓名" clearable />
             <n-input v-model:value="query.ipAddress" placeholder="IP地址" clearable />
             <n-button type="primary" @click="fetchData">搜索</n-button>
             <n-button quaternary @click="showAdvanced = !showAdvanced">
                {{ showAdvanced ? '收起筛选' : '高级筛选' }}
                <template #icon>
                  <n-icon>
                    <component :is="showAdvanced ? 'ChevronUpOutline' : 'ChevronDownOutline'" />
                  </n-icon>
                </template>
             </n-button>
             <n-button type="primary" class="bg-primary" @click="handleAdd">新增设备</n-button>
           </n-space>
           
           <!-- Advanced Search Row -->
           <n-collapse-transition :show="showAdvanced">
             <n-space class="mt-2 p-4 bg-gray-100/50 rounded-lg">
                <n-select v-model:value="query.netType" :options="netTypeOptions" placeholder="网络类型" class="w-32" clearable />
                <n-tree-select 
                   v-model:value="query.deptId" 
                   :options="deptOptions" 
                   key-field="id"
                   label-field="deptName" 
                   placeholder="选择部门" 
                   class="w-48"
                   clearable
                />
                <n-select v-model:value="query.officeId" :options="officeOptions" placeholder="选择办公室" class="w-48" clearable />
                <n-input v-model:value="query.ipAddress2" placeholder="IP地址 2 (双IP匹配)" clearable />
                <n-input v-model:value="query.macAddress" placeholder="MAC地址" clearable />
                <n-input-number v-model:value="query.minIpCount" placeholder="最小IP数" class="w-32" clearable />
             </n-space>
           </n-collapse-transition>
        </n-space>
      </n-card>
    </div>

    <n-card :bordered="false" class="shadow-sm rounded-xl">
      <n-data-table
        :columns="columns"
        :data="data"
        :loading="loading"
        :pagination="{ pageSize: 50 }"
        :bordered="true"
        :span-method="spanMethod"
      />
      <div class="mt-4">
        <n-button type="info" ghost :loading="exportLoading" @click="handleExport">导出 Excel</n-button>
      </div>
    </n-card>

    <n-modal v-model:show="showModal" preset="card" title="设备信息" class="max-w-5xl">
      <div class="space-y-6">
        <!-- User Info Section -->
        <n-card title="基本信息" size="small" :bordered="false" class="bg-gray-50/50">
          <div class="grid grid-cols-3 gap-4">
            <n-form-item label="用户姓名">
              <n-select 
                v-if="!userForm.userId"
                v-model:value="userForm.userId" 
                :options="modalUserOptions" 
                filterable
                placeholder="请选择用户" 
              />
              <n-input v-else :value="userForm.userName" disabled />
            </n-form-item>
            <n-form-item label="归属部门">
              <n-input :value="userForm.deptName" disabled />
            </n-form-item>
            <n-form-item label="办公室">
              <n-input :value="userForm.officeName" disabled />
            </n-form-item>
          </div>
        </n-card>

        <!-- Devices Section -->
        <div v-for="(item, index) in devicesForm" :key="index" class="relative border rounded-xl p-6 bg-white shadow-sm">
          <div class="absolute top-4 right-4 flex gap-3">
             <n-button v-if="!isReadOnly" circle size="small" color="#d03050" @click="removeDevice(index)">
               <span class="font-bold text-white text-lg">−</span>
             </n-button>
             <n-button v-if="!isReadOnly && index === devicesForm.length - 1" circle size="small" color="#18a058" @click="addDevice">
               <span class="font-bold text-white text-lg">+</span>
             </n-button>
          </div>

          <h3 class="text-lg font-bold mb-4 text-primary">设备 {{ index + 1 }} 信息</h3>
          
          <div class="grid grid-cols-2 gap-x-8 gap-y-2">
            <n-form-item label="归属部门">
              <n-input :value="userForm.deptName" disabled />
            </n-form-item>
            <n-form-item label="设备名称" required>
              <n-input v-model:value="item.device.deviceName" :disabled="isReadOnly" placeholder="请输入设备名称" />
            </n-form-item>
            <n-form-item label="设备编号">
              <n-input v-model:value="item.device.deviceCode" :disabled="isReadOnly" placeholder="请输入设备编号" />
            </n-form-item>
            <n-form-item label="型号">
              <n-input v-model:value="item.device.model" :disabled="isReadOnly" placeholder="请输入型号" />
            </n-form-item>
            <n-form-item label="状态">
              <n-select v-model:value="item.device.status" :options="statusOptions" :disabled="isReadOnly" />
            </n-form-item>
          </div>

          <n-divider title-placement="left" dashed>IP及MAC地址</n-divider>
          
          <div class="space-y-4">
            <div v-for="(mac, macIdx) in item.macs" :key="macIdx" class="bg-gray-50 p-4 rounded-lg border border-dashed">
              <div class="flex gap-4 mb-3">
                <n-input v-model:value="mac.macName" :disabled="isReadOnly" placeholder="网卡名称" class="w-32" />
                <n-input v-model:value="mac.macAddress" :disabled="isReadOnly" placeholder="MAC地址" class="flex-1" />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="(ip, ipIdx) in mac.ips" :key="ipIdx" class="flex gap-2 items-center">
                  <n-input v-model:value="ip.ipAddress" :disabled="isReadOnly" placeholder="IP地址" />
                  <n-select v-model:value="ip.netType" :options="netTypeOptions" :disabled="isReadOnly" class="w-28" />
                  <div v-if="!isReadOnly" class="flex gap-1">
                      <n-button circle size="tiny" color="#d03050" @click="removeIp(mac, Number(ipIdx))" :disabled="mac.ips.length <= 1">
                        <span class="font-bold text-white text-sm">−</span>
                      </n-button>
                      <n-button v-if="ipIdx === mac.ips.length - 1" circle size="tiny" color="#18a058" @click="addIp(mac)">
                        <span class="font-bold text-white text-sm">+</span>
                      </n-button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <n-form-item label="备注" class="mt-4">
            <n-input v-model:value="item.device.remark" type="textarea" :disabled="isReadOnly" placeholder="请输入备注" />
          </n-form-item>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <n-button @click="showModal = false">关闭</n-button>
          <n-button v-if="isReadOnly" type="primary" @click="isReadOnly = false">修改</n-button>
          <n-button v-else type="primary" :loading="addLoading" @click="submitAdd">保存</n-button>
        </div>
      </template>
    </n-modal>
  </div>
</template>

<style scoped>
.bg-primary {
  background-color: #18A058;
}
</style>
