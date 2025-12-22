<template>
  <div class="p-4">
    <n-card title="办公室管理">

      <n-space vertical>
        <n-space>
          <n-input v-model:value="searchName" placeholder="搜索办公室名称" clearable />
          <n-select v-model:value="searchStatus" :options="statusOptions" class="w-32" @update:value="fetchData" />
          <n-button type="primary" @click="fetchData">搜索</n-button>
          <n-button @click="handleExport">导出</n-button>
          <n-button type="success" @click="handleAdd">新增办公室</n-button>
        </n-space>
        
        <n-data-table
          :columns="columns"
          :data="data"
          :pagination="pagination"
          :loading="loading"
          @update:page="handlePageChange"
        />
      </n-space>
    </n-card>

    <n-modal v-model:show="showModal" preset="dialog" :title="modalTitle">
      <n-form ref="formRef" :model="formModel" :rules="rules">
        <n-form-item label="办公室名称" path="officeName">
          <n-input v-model:value="formModel.officeName" />
        </n-form-item>
        <n-form-item label="位置" path="location">
          <n-input v-model:value="formModel.location" />
        </n-form-item>
        <n-form-item label="备注" path="remark">
          <n-input type="textarea" v-model:value="formModel.remark" />
        </n-form-item>
        <n-form-item label="状态" path="status">
          <n-select v-model:value="formModel.status" :options="statusOptions.filter(o => o.value !== '')" />
        </n-form-item>
      </n-form>
      <template #action>
        <n-button @click="showModal = false">取消</n-button>
        <n-button type="primary" @click="handleSubmit">确定</n-button>
      </template>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, h } from 'vue'
import { NButton, NSpace, NCard, NDataTable, NInput, NModal, NForm, NFormItem, useMessage, NPopconfirm, NSelect, NSwitch } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import request from '../../utils/request'

const message = useMessage()
const searchName = ref('')
const searchStatus = ref('0')
const statusOptions = [
  { label: '正常', value: '0' },
  { label: '禁用', value: '1' },
  { label: '全部', value: '' }
]
const loading = ref(false)
const data = ref([])
const pagination = ref({
  page: 1,
  pageSize: 10,
  itemCount: 0
})

const showModal = ref(false)
const modalTitle = ref('新增')
const formRef = ref()
const formModel = ref({
  id: undefined,
  officeName: '',
  location: '',
  remark: '',
  status: '0'
})

const rules = {
  officeName: { required: true, message: '请输入办公室名称', trigger: 'blur' }
}

const columns: DataTableColumns = [
  { title: '编号', key: 'id', width: 80 },
  { title: '名称', key: 'officeName' },
  { title: '位置', key: 'location' },
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
  { title: '备注', key: 'remark' },
  { title: '创建时间', key: 'createTime' },
  {
    title: '操作',
    key: 'actions',
    render(row: any) {
      return h(NSpace, null, {
        default: () => [
          h(NButton, {
            size: 'small',
            type: 'primary',
            onClick: () => handleEdit(row)
          }, { default: () => '编辑' })
        ]
      })
    }
  }
]

const fetchData = async () => {
  loading.value = true
  try {
    const res: any = await request.get('/biz/office/list', {
      params: {
        pageNum: pagination.value.page,
        pageSize: pagination.value.pageSize,
        officeName: searchName.value,
        status: searchStatus.value
      }
    })
    console.log('OfficeList response:', res)
    if (res) {
      data.value = res.records || []
      pagination.value.itemCount = res.total || 0
    } else {
      data.value = []
      pagination.value.itemCount = 0
    }
  } catch (error) {
    message.error('获取列表失败')
  } finally {
    loading.value = false
  }
}

const handlePageChange = (page: number) => {
  pagination.value.page = page
  fetchData()
}

const handleAdd = () => {
  modalTitle.value = '新增办公室'
  formModel.value = { id: undefined, officeName: '', location: '', remark: '', status: '0' }
  showModal.value = true
}

const handleEdit = (row: any) => {
  modalTitle.value = '编辑办公室'
  formModel.value = { ...row }
  showModal.value = true
}

const handleStatusChange = async (row: any, active: boolean) => {
  const newStatus = active ? '0' : '1'
  try {
    // 仅发送必要的字段
    const updateData = { id: row.id, status: newStatus }
    await request.put('/biz/office', updateData)
    row.status = newStatus
    message.success(active ? '已启用' : '已禁用')
  } catch(e) {
    message.error('状态修改失败')
  }
}

// handleDelete removed as per requirement

const handleSubmit = () => {
  formRef.value?.validate(async (errors: any) => {
    if (!errors) {
      try {
        const submitData = { ...formModel.value }
        // 移除只读字段，避免后端解析错误
        delete (submitData as any).createTime
        delete (submitData as any).updateTime
        
        if (formModel.value.id) {
          await request.put('/biz/office', submitData)
        } else {
          await request.post('/biz/office', submitData)
        }
        message.success('操作成功')
        showModal.value = false
        fetchData()
      } catch (error) {
        // Error handled by interceptor
      }
    }
  })
}

const handleExport = () => {
  window.location.href = `http://localhost:8080/biz/office/export?officeName=${searchName.value}`
}

onMounted(() => {
  fetchData()
})
</script>
