<template>
  <Modal v-model="showModal">
    <h3 slot="header">{{ type === 'add' ? '新增' : '修改' }}</h3>
    <auto-form ref="autoForm" :formItems="formItems" :formType="type" :hide-submit="true" @saved="saved"></auto-form>
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
    addUrl: {
      type: String
    },
    editUrl: {
      type: String
    }
  },
  data () {
    return {
      showModal: false,
      type: 'add'
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
      this.type = 'add'
      this.showModal = true
    },
    showEdit () {
      this.type = 'edit'
      this.showModal = true
    },
    save () {
      this.$refs.autoForm.save()
    },
    saved (formModel) {
      this.$emit('saved', formModel)
    }
  }
}
</script>

<style scoped>

</style>
