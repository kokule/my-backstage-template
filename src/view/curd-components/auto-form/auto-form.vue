<template>
  <Card>
    <auto-form :formItems="formItems"></auto-form>
  </Card>
</template>

<script>
import autoForm from '_c/auto-form'

export default {
  components: {
    autoForm
  },
  data () {
    return {
      formItems: [
        {
          name: 'username',
          value: '',
          label: '用户名',
          formType: 'v-input',
          rules: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          options: {
            clearable: true
          }
        },
        {
          name: 'password',
          value: '',
          label: '密码',
          formType: 'v-input',
          rules: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          options: {
            type: 'password',
            placeholder: '请输入密码'
          }
        },
        {
          name: 'city',
          value: 3,
          label: '所在城市',
          formType: 'v-select',
          options: {
            selectLabelKey: 'name',
            selectValueKey: 'id',
            placeholder: '请选择所在城市',
            selectItems: [
              {
                id: 1,
                name: '北京'
              },
              {
                id: 2,
                name: '上海'
              },
              {
                id: 3,
                name: '深圳'
              }
            ]
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
