<template>
  <div>
    <Card shadow>
      树状表格组件tree-table-vue，基于<a href="https://github.com/MisterTaki/vue-table-with-tree-grid">vue-table-with-tree-grid</a>进行开发，修复了一些bug，添加了一些新属性
      <p><b>支持使用slot-scope进行自定义列渲染内容</b></p>
      <p>文档请看<a href="https://github.com/lison16/tree-table-vue">https://github.com/lison16/tree-table-vue</a></p>
      <tree-table expand-key="class" :expand-type="false" :selectable="false" :columns="columns" :data="data" >
        <template slot="handle" slot-scope="scope">
          <Button @click="handle(scope.row)">123</Button>
        </template>
      </tree-table>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'tree_table_page',
  data () {
    return {
      columns: [
        {
          title: '班级',
          key: 'class'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '分数',
          key: 'score'
        },
        {
          title: '操作',
          key: 'handle',
          type: 'template',
          template: 'handle'
        }
      ],
      data: [
        {
          class: '1班',
          children: [
            {
              name: '安琪拉',
              sex: '女',
              score: 99
            },
            {
              name: '狄仁杰',
              sex: '男',
              score: 59
            }
          ]
        }
      ]
    }
  },
  methods: {
    handle (row) {
      console.log(row)
    }
  }
}
</script>

<style>

</style>
