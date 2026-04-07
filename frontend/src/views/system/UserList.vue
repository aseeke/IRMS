<script setup lang="ts">
import { ref, onMounted, reactive, h } from 'vue'
import { NCard, NDataTable, NButton, NSpace, NInput, NForm, NFormItem, NModal, useMessage, NTag, NSelect, NTreeSelect, NSwitch } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import request from '../../utils/request'

interface User {
  id: number
  userName: string
  nickName: string
  deptId: number
  dept?: { deptName: string }
  officeId: number
  office?: { officeName: string }
  phonenumber: string
  remark: string
  createTime: string
  status: string
}

const message = useMessage()
const loading = ref(false)
const data = ref<User[]>([])
const showModal = ref(false)
const submitLoading = ref(false)
const deptOptions = ref([])
const officeOptions = ref([])
const searchStatus = ref('0')
const statusOptions = [
  { label: '正常', value: '0' },
  { label: '禁用', value: '1' },
  { label: '全部', value: '' }
]

const formValue = reactive({
  id: undefined,
  userName: '',
  nickName: '',
  deptId: null as number | null,
  officeId: null as number | null,
  phonenumber: '',
  password: '',
  remark: '',
  status: '0'
})

const columns: DataTableColumns<User> = [
  { title: '用户账号', key: 'userName' },
  { title: '用户姓名', key: 'nickName' },
  { 
      title: '所属部门', 
      key: 'dept',
      render(row) {
          return row.dept?.deptName || '-'
      }
  },
  { 
      title: '办公室', 
      key: 'office',
      render(row) {
          return row.office?.officeName || '-'
      }
  },
  { title: '手机号码', key: 'phonenumber' },
  { 
    title: '状态', 
    key: 'status',
    render(row) {
      return h(NSwitch, {
        value: row.status === '0',
        onUpdateValue: (val) => handleStatusChange(row, val)
      })
    }
  },
  { title: '备注', key: 'remark' },
  { title: '创建时间', key: 'createTime' },
  {
    title: '操作',
    key: 'actions',
    render(row) {
      return h(
        NSpace,
        null,
        {
           default: () => [
             h(NButton, { size: 'small', type: 'primary', onClick: () => handleEdit(row) }, { default: () => '编辑' })
           ]
        }
      )
    }
  }
]

const loadDepts = async () => {
    try {
        const res: any = await request.get('/system/dept/tree')
        deptOptions.value = res
    } catch(e) {}
}

const loadOffices = async () => {
    try {
        const res: any = await request.get('/biz/office/list', { params: { pageNum: 1, pageSize: 100 } })
        officeOptions.value = res.records.map((item: any) => ({ label: item.officeName, value: item.id }))
    } catch(e) {}
}

const fetchData = async () => {
  loading.value = true
  try {
    const res: any = await request.get('/system/user/list', { 
        params: { 
            pageNum: 1, 
            pageSize: 100,
            status: searchStatus.value
        } 
    })
    data.value = res.records
  } catch (error) {
    message.error('获取用户列表失败')
  } finally {
    loading.value = false
  }
}

const handleStatusChange = async (row: User, active: boolean) => {
  const newStatus = active ? '0' : '1'
  try {
    await request.put('/system/user', { ...row, status: newStatus })
    row.status = newStatus
    message.success(active ? '已启用' : '已禁用')
  } catch(e) {
    message.error('状态修改失败')
  }
}

const handleAdd = () => {
  formValue.id = undefined
  formValue.userName = ''
  formValue.nickName = ''
  formValue.deptId = null
  formValue.officeId = null
  formValue.phonenumber = ''
  formValue.password = '123456'
  formValue.remark = ''
  formValue.status = '0'
  showModal.value = true
}

const handleEdit = (row: any) => {
  Object.assign(formValue, row)
  formValue.password = '' 
  showModal.value = true
}

// handleDelete removed as per requirement

const handleSubmit = async () => {
  if (!formValue.userName || !formValue.nickName || !formValue.deptId || !formValue.officeId) {
    message.warning('请填写必填项 (账号, 姓名, 部门, 办公室)')
    return
  }
  
  // Validation Rules
  const userNameRegex = /^[a-zA-Z0-9]+$/
  if (!userNameRegex.test(formValue.userName)) {
      message.warning('用户账号只能包含英文和数字')
      return
  }
  
  const nickNameRegex = /^[\u4e00-\u9fa5a-zA-Z0-9\s]+$/
  if (!nickNameRegex.test(formValue.nickName)) {
      message.warning('用户姓名只能包含中文、英文、数字和空格')
      return
  }
  
  submitLoading.value = true
  try {
    const submitData = { ...formValue }
    delete (submitData as any).createTime
    delete (submitData as any).dept
    delete (submitData as any).office
    
    if (formValue.id) {
        await request.put('/system/user', submitData)
    } else {
        await request.post('/system/user', submitData)
    }
    message.success(formValue.id ? '修改成功' : '新增成功')
    showModal.value = false
    fetchData()
  } finally {
    submitLoading.value = false
  }
}

const handleExport = () => {
    window.location.href = 'http://localhost:8080/system/user/export'
}

onMounted(() => {
  loadDepts()
  loadOffices()
  fetchData()
})
</script>

<template>
  <div class="p-4">
    <n-card title="用户管理">
      <n-space vertical>
        <n-space>
          <n-select v-model:value="searchStatus" :options="statusOptions" class="w-32" @update:value="fetchData" />
          <n-button @click="handleExport">导出</n-button>
          <n-button type="primary" @click="handleAdd">新增用户</n-button>
        </n-space>

        <n-data-table :columns="columns" :data="data" :loading="loading" />
      </n-space>
    </n-card>

    <n-modal v-model:show="showModal" preset="card" :title="formValue.id ? '编辑用户' : '新增用户'" class="max-w-md">
      <n-form label-placement="left" label-width="80">
        <n-form-item label="用户账号" required>
          <n-input v-model:value="formValue.userName" placeholder="英文+数字" :disabled="!!formValue.id" />
        </n-form-item>
        <n-form-item label="用户姓名" required>
          <n-input v-model:value="formValue.nickName" placeholder="中英文+数字" :disabled="!!formValue.id" />
        </n-form-item>
        <n-form-item label="所属部门" required>
           <n-tree-select 
              v-model:value="formValue.deptId" 
              :options="deptOptions" 
              key-field="id"
              label-field="deptName" 
              placeholder="选择部门" 
              clearable
           />
        </n-form-item>
        <n-form-item label="办公室" required>
           <n-select 
              v-model:value="formValue.officeId" 
              :options="officeOptions" 
              placeholder="选择办公室" 
              clearable
           />
        </n-form-item>
        <n-form-item label="手机号码">
          <n-input v-model:value="formValue.phonenumber" placeholder="请输入手机号" />
        </n-form-item>
        <n-form-item label="密码" v-if="!formValue.id">
           <n-input v-model:value="formValue.password" type="password" placeholder="默认 123456" />
        </n-form-item>
        <n-form-item label="重置密码" v-else>
           <n-input v-model:value="formValue.password" type="password" placeholder="留空则不修改" />
        </n-form-item>
        <n-form-item label="备注">
          <n-input v-model:value="formValue.remark" type="textarea" placeholder="请输入备注" />
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
