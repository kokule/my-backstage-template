<template>
  <Card shadow style="height: 100%;width: 100%;overflow:hidden">
    <div class="department-outer">
      <div class="tip-box">
        <b style="margin-right: 20px;">powered by <a target="blank" href="https://github.com/lison16">Lison</a></b>
        <a target="blank" href="https://github.com/lison16/v-org-tree" style="margin-right: 10px;">v-org-tree文档</a>
      </div>
      <div class="zoom-box">
        <zoom-controller v-model="zoom" :min="20" :max="200"></zoom-controller>
      </div>
      <div class="view-box">
        <org-view
                v-if="data"
                :data="data"
                :zoom-handled="zoomHandled"
                @on-menu-click="handleMenuClick"
        ></org-view>
      </div>
    </div>
  </Card>
</template>

<script>
import OrgView from './components/org-view.vue'
import ZoomController from './components/zoom-controller.vue'
import './index.less'

const menuDic = {
  edit: '编辑部门',
  detail: '查看部门',
  new: '新增子部门',
  delete: '删除部门'
}
export default {
  name: 'org_tree_page',
  components: {
    OrgView,
    ZoomController
  },
  data () {
    return {
      data: {
        id: 0,
        label: '浙江航天恒嘉数据科技有限公司',
        children: [
          {
            id: 1,
            label: '产品研发部',
            children: [
              {
                id: 11,
                label: '覃凯'
              },
              {
                id: 12,
                label: '覃科凯'
              }
            ]
          },
          {
            id: 2,
            label: '产品保证中心',
            children: [
              {
                id: 21,
                label: '常国成'
              }
            ]
          },
          {
            id: 3,
            label: '市场开发部',
            children: [
              {
                id: 31,
                label: '郭富城'
              }
            ]
          },
          {
            id: 4,
            label: '职能管理部',
            children: [
              {
                id: 41,
                label: '谢霆锋'
              }
            ]
          },
          {
            id: 5,
            label: '业务运营中心',
            children: [
              {
                id: 51,
                label: '陈冠希'
              }
            ]
          }
        ]
      },
      zoom: 100
    }
  },
  computed: {
    zoomHandled () {
      return this.zoom / 100
    }
  },
  methods: {
    setDepartmentData (data) {
      data.isRoot = true
      return data
    },
    handleMenuClick ({ data, key }) {
      this.$Message.success({
        duration: 5,
        content: `点击了《${data.label}》节点的'${menuDic[key]}'菜单`
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
  .org-tree-node-label{
    margin-right: 20px;
  }
</style>
