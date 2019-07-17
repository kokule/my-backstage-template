<template>
  <Modal v-model="showModal">
    <h3 slot="header">{{title}}</h3>
    <auto-form ref="autoForm"
               :formItems="formItems"
               :formType="type"
               :hide-submit="true"
               :add-method="addMethod"
               :edit-method="editMethod"
               @saved="saved"
               @add-success="addSuccessHandle"
               @edit-success="editSuccessHandle"></auto-form>
    <div slot="footer">
      <Button @click="showModal = false">取消</Button>
      <Button type="primary" @click="save">保存</Button>
    </div>
  </Modal>
</template>

<script>
import autoForm from '_c/auto-form'

export default {
  name: 'modal-form',
  components: {
    autoForm
  },
  props: {
    formItems: {
      required: true,
      type: Array
    },
    addMethod: {
      type: Function
    },
    editMethod: {
      type: Function
    }
  },
  data () {
    return {
      showModal: false,
      type: 'add',
      title: '新增'
    }
  },
  watch: {
    showModal (show) {
      if (!show) {
        this.$refs.autoForm.resetFields()
      }
    }
  },
  methods: {
    showAdd () {
      this.chooseTitle('add')
      this.formItems.forEach(item => {
        item.value = ''
      })
      this.$refs.autoForm.initData()
      this.showModal = true
    },
    showEdit () {
      this.chooseTitle('edit')
      this.$refs.autoForm.initData()
      this.showModal = true
    },
    showView () {
      this.chooseTitle('view')
      this.$refs.autoForm.initData()
      this.showModal = true
    },
    chooseTitle (data) {
      switch (data) {
        case 'add':
          this.title = '新增'
          break
        case 'edit':
          this.title = '编辑'
          break
        case 'view':
          this.title = '详情'
          break
      }
    },
    save () {
      this.$refs.autoForm.save()
    },
    saved (formModel) {
      this.$emit('saved', formModel)
    },
    addSuccessHandle () {
      this.showModal = false
      this.$emit('add-success')
    },
    editSuccessHandle () {
      this.showModal = false
      this.$emit('edit-success')
    }
  }
}
</script>

<style scoped>

</style>
