<template>
  <div>
    <Card>
      <curd-page :get-method="getMethod"
                 :columns="columns"
                 :search-items="searchItems"
                 :form-items="formItems"
                 :add-method="addMethod"
                 :edit-method="editMethod"
                 :del-method="delMethod"
                 :operation="operation"></curd-page>
    </Card>
  </div>
</template>

<script>
import curdPage from '_c/curd-page'
import { getTableData } from '@/api/data.js'
import validate from '../../../libs/validate'

export default {
  components: {
    curdPage
  },
  data () {
    const validateAge = (rule, value, callback) => {
      if (!value || value < 0 || value > 120) {
        return callback(new Error('请输入正常的年龄'))
      } else {
        callback()
      }
    }
    return {
      enterprises: [],
      getMethod: getTableData,
      addMethod: getTableData,
      delMethod: getTableData,
      editMethod: getTableData,
      columns: [
        {
          title: '序号',
          key: 'id',
          align: 'center',
          width: 150
        },
        {
          title: '名字',
          key: 'name',
          align: 'center'
        },
        {
          title: '位置',
          key: 'position',
          align: 'center'
        },
        {
          title: '大区',
          key: 'area',
          align: 'center'
        },
        {
          title: '擅长英雄',
          key: 'hero',
          align: 'center'
        }
      ],
      operation: {
        edit: {},
        delete: {},
        view: {}
      },
      searchItems: [
        {
          name: 'enterpriseId',
          label: '名字:',
          value: '',
          formType: 'v-input',
          options: {
            width: 200
          }
        },
        {
          name: 'plateNo',
          label: '位置:',
          value: '',
          formType: 'v-input',
          options: {
            width: 200
          }
        }
      ],
      formItems: [
        {
          name: 'id',
          value: ''
        },
        {
          name: 'name',
          label: '名字:',
          value: '',
          formType: 'v-input',
          rules: [
            { required: true, message: '请输入名称', trigger: 'blur' }
          ],
          options: {
            width: 150
          }
        },
        {
          name: 'position',
          label: '大区:',
          formType: 'v-select',
          options: {
            width: 150,
            selectItems: [
              {
                label: '艾欧尼亚',
                value: '1'
              },
              {
                label: '祖安',
                value: '2'
              },
              {
                label: '诺克萨斯',
                value: '3'
              },
              {
                label: '班德尔城',
                value: '4'
              },
              {
                label: '战争学院',
                value: '6'
              }
            ]
          },
          rules: [
            { required: true, message: '请选择你的位置', trigger: 'change' }
          ]
        },
        {
          name: 'carType',
          label: '位置',
          value: '',
          formType: 'v-select',
          options: {
            width: 150,
            selectItems: [
              {
                label: '上路',
                value: '1'
              },
              {
                label: '中路',
                value: '2'
              },
              {
                label: '打野',
                value: '3'
              },
              {
                label: '下路',
                value: '4'
              },
              {
                label: '辅助',
                value: '5'
              }
            ]
          },
          rules: [
            { required: true, message: '请选择大区', trigger: 'blur' }
          ]
        },
        {
          name: 'transportNum',
          label: '擅长英雄',
          formType: 'v-input',
          options: {
            width: 150
          },
          rules: [
            { required: true, message: '请选择擅长英雄', trigger: 'blur' }
          ]
        },
        {
          name: 'age',
          label: '年龄',
          formType: 'v-input',
          options: {
            width: 150
          },
          rules: [
            { required: true, validator: validateAge, trigger: 'blur' }
          ]
        },
        {
          name: 'phone',
          label: '手机',
          formType: 'v-input',
          options: {
            width: 150
          },
          rules: [
            { required: true, validator: validate.validateMustPhoneNumber, trigger: 'blur' }
          ]
        }
      ]
    }
  },
  created () {
    this.getEnterprises()
  },

  methods: {
    getEnterprises () {
      // getEnterpriseList({ pageIndex: 1, pageSize: 1000 }).then(res => {
      //   this.enterprises = res.data.data.list
      //   this.formItems[1].options.selectItems = this.enterprises
      //   this.searchItems[0].options.selectItems = this.enterprises
      // })
    }
  }
}
</script>

<style scoped>

</style>
