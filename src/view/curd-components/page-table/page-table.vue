<template>
  <div>
    <Card>
      <page-table :get-method="getMethod" :columns="columns"></page-table>
    </Card>
  </div>
</template>

<script>
import pageTable from '_c/page-table'
import { getTableData } from '@/api/data'
export default {
  components: {
    pageTable
  },
  data () {
    return {
      getUrl: '/api/vehicle/queryAllByEnterpriseId',
      getMethod: getTableData,
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
      ]
    }
  }
}
</script>

<style scoped>

</style>
