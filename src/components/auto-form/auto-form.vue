<template>
  <Form ref="form" :model="formModel" :rules="ruleModel">
    <FormItem v-for="item in displayFormItems" :key="item.name" :prop="item.name" :label="item.label">
      <component :is="formComponents[item.formType]" v-model="formModel[item.name]" :options="item.options"></component>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="save">保存</Button>
    </FormItem>
  </Form>
</template>

<script>
import input from '_c/form-components/input'
import select from '_c/form-components/select'

export default {
  name: 'auto-form',
  components: {
    'v-input': input,
    'v-select': select
  },
  props: {
    formType: { // 表单类型 add或者edit 默认add
      type: String,
      default: 'add'
    },
    formItems: {
      required: true,
      type: Array
    },
    addUrl: {
      type: String
    },
    editUrl: {
      type: String
    }
  },
  data () {
    return {
      formModel: {},
      ruleModel: {},
      displayFormItems: [],
      formComponents: {
        'v-input': input,
        'v-select': select
      }
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.formItems.forEach(item => {
        this.formModel[item.name] = item.value
        if (item.formType && item.formType !== 'hidden') {
          this.displayFormItems.push(item)
        }
        if (item.rules && item.rules.length > 0) {
          this.ruleModel[item.name] = item.rules
        }
      })
      console.log(this.ruleModel)
    },
    save () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('表单数据', this.formModel)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
