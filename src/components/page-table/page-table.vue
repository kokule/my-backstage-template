<template>
  <div>
    <Table :loading="loading" :columns="columns" :data="rows"></Table>
    <div class="page-bar">
      <Page :current="page"
            :total="count"
            :page-size="pageSize"
            show-elevator
            show-sizer
            show-total
            @on-change="changePage"
            @on-page-size-change="changeSize"></Page>
    </div>
  </div>
</template>

<script>
import axios from '@/libs/api.request'
export default {
  name: 'page-table',
  props: {
    columns: { // 定义列
      required: true,
      type: Array
    },
    getUrl: { // 获取数据的接口url
      required: true,
      type: String
    },
    params: { // 接口参数（可不传）
      type: Object,
      default: function () {
        return {}
      }
    },
    pageIndexKey: { // 页码key 默认为pageIndex
      type: String,
      default: 'pageIndex'
    },
    pageSizeKey: { // 每页数量key 默认为pageSize
      type: String,
      default: 'pageSize'
    }
  },
  data () {
    return {
      loading: false, // loading效果
      rows: [], // 获取的list数据
      count: 0, // 数据总条数
      page: 1, // 当前页数,
      pageSize: 10 // 每页显示条数
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    /**
     * @description 获取列表数据
     */
    getData () {
      this.loading = true
      this.params[this.pageIndexKey] = this.page
      this.params[this.pageSizeKey] = this.pageSize
      axios.request({
        url: this.getUrl,
        method: 'get',
        params: this.params
      }).then(res => {
        console.log(res)
        this.loading = false
        this.rows = res.data.data.list
        this.count = res.data.data.count
        console.log(this.rows)
      }).catch(err => {
        this.loading = false
        console.log(err)
      })
    },
    changePage (page) {
      this.page = page
      this.getData()
    },
    changeSize (size) {
      this.page = 1
      this.pageSize = size
      this.getData()
    }
  }
}
</script>

<style lang="less" scoped>
.page-bar {
  margin-top: 10px;
  text-align: right;
}
</style>
