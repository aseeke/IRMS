<script setup lang="ts">
import { ref, onMounted, reactive, h } from 'vue'
import { NCard, NDataTable, NButton, NSpace, NInput, NForm, NFormItem, NModal, useMessage, NTreeSelect, NInputNumber, NSelect, NSwitch } from 'naive-ui'
import request from '../../utils/request'

const message = useMessage()
const loading = ref(false)
const data = ref([])
const showModal = ref(false)
const submitLoading = ref(false)
const searchStatus = ref('0')
const statusOptions = [
  { label: '正常', value: '0' },
  { label: '禁用', value: '1' },
  { label: '全部', value: '' }
]

const formValue = reactive({
  id: undefined,
  parentId: 0,
  deptName: '',
  orderNum: 0,
  leader: '',
  phone: '',
  email: '',
  status: '0'
})

const columns = [
  { title: '部门名称', key: 'deptName' },
  { title: '排序', key: 'orderNum' },
  { title: '负责人', key: 'leader' },
  { 
    title: '状态', 
    key: 'status',
    render(row: any) {
      return h(NSwitch, {
        value: row.status === '0',
        onUpdateValue: (val) => handleStatusChange(row, val)
      })
    }
  },
  { title: '创建时间', key: 'createTime' },
  {
    title: '操作',
    key: 'actions',
    render(row) {
      return h(NSpace, null, {
        default: () => [
          h(NButton, { size: 'small', type: 'primary', onClick: () => handleEdit(row) }, { default: () => '编辑' })
        ]
      })
    }
  }
]

const fetchData = async () => {
  loading.value = true
  try {
    const res: any = await request.get('/system/dept/tree', { params: { status: searchStatus.value } })
    data.value = res
  } catch (error) {
    message.error('获取部门列表失败')
  } finally {
    loading.value = false
  }
}

const handleAdd = () => {
  formValue.id = undefined
  formValue.parentId = 0
  formValue.deptName = ''
  formValue.orderNum = 0
  formValue.leader = ''
  formValue.phone = ''
  formValue.email = ''
  formValue.status = '0'
  showModal.value = true
}

const handleEdit = (row: any) => {
  Object.assign(formValue, row)
  showModal.value = true
}

const handleStatusChange = async (row: any, active: boolean) => {
  const newStatus = active ? '0' : '1'
  try {
    await request.put('/system/dept', { ...row, status: newStatus })
    row.status = newStatus
    message.success(active ? '已启用' : '已禁用')
  } catch(e) {
    message.error('状态修改失败')
  }
}

// handleDelete removed as per requirement

const handleSubmit = async () => {
  if (!formValue.deptName) {
    message.warning('请输入部门名称')
    return
  }
  submitLoading.value = true
  try {
    const submitData = { ...formValue }
    delete (submitData as any).createTime
    delete (submitData as any).children
    
    if (formValue.id) {
        await request.put('/system/dept', submitData)
    } else {
        await request.post('/system/dept', submitData)
    }
    message.success(formValue.id ? '修改成功' : '新增成功')
    showModal.value = false
    fetchData()
  } finally {
    submitLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="p-4">
    <n-card title="部门管理">
      <n-space vertical>
        <n-space>
          <n-select v-model:value="searchStatus" :options="statusOptions" class="w-32" @update:value="fetchData" />
          <n-button type="primary" @click="handleAdd">新增部门</n-button>
        </n-space>

        <n-data-table
          :columns="columns"
          :data="data"
          :loading="loading"
          :row-key="(row) => row.id"
          default-expand-all
        />
      </n-space>
    </n-card>

    <n-modal v-model:show="showModal" preset="card" :title="formValue.id ? '编辑部门' : '新增部门'" class="max-w-md">
      <n-form label-placement="left" label-width="80">
        <n-form-item label="上级部门">
           <n-tree-select
              v-model:value="formValue.parentId"
              :options="data"
              key-field="id"
              label-field="deptName"
              placeholder="请选择上级部门"
              default-expand-all
           />
        </n-form-item>
        <n-form-item label="部门名称" required>
          <n-input v-model:value="formValue.deptName" placeholder="请输入部门名称" />
        </n-form-item>
        <n-form-item label="显示排序">
          <n-input-number v-model:value="formValue.orderNum" />
        </n-form-item>
        <n-form-item label="负责人">
          <n-input v-model:value="formValue.leader" placeholder="请输入负责人" />
        </n-form-item>
        <n-form-item label="联系电话">
          <n-input v-model:value="formValue.phone" placeholder="请输入联系电话" />
        </n-form-item>
        <n-form-item label="邮箱">
          <n-input v-model:value="formValue.email" placeholder="请输入邮箱" />
        </n-form-item>
        <n-form-item label="状态" path="status">
          <n-select v-model:value="formValue.status" :options="statusOptions.filter(o => o.value !== '')" />
        </n-form-item>
      </n-form>
      <template #footer>
        <div class="flex justify-end gap-2">
          <n-button @click="showModal = false">取消</n-button>
          <n-button type="primary" :loading="submitLoading" @click="handleSubmit">确定</n-button>
        </div>
      </template>
    </n-modal>
  </div>
</template>
