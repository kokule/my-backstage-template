<template>
  <div>
    <Row>
      <i-col>
        <Card>
          <Row>
            <i-col span="8">
              <Button type="primary" @click="showModal">显示可拖动弹窗</Button>
              <br/>
              <Button v-draggable="buttonOptions" class="draggable-btn">这个按钮也是可以拖动的</Button>
            </i-col>
            <i-col span="16">
              <div class="intro-con">
                <pre class="code-con">
                    &lt;Modal v-model="modalVisible" draggable scrollable title="可拖拽框" &gt;内容&lt;/Modal&gt;
                </pre>
              </div>
            </i-col>
          </Row>
          <Modal v-model="modalVisible" draggable scrollable title="可拖拽框">
            <div>这里需要注意,必须设置Modal框的title才可以进行拖拽</div>
          </Modal>
        </Card>
      </i-col>
    </Row>

    <Row style="margin-top: 10px;">
      <i-col>
        <Card>
          <Row>
            <i-col span="8">
              <Input style="width: 60%" v-model="inputValue">
                <Button slot="append" v-clipboard="clipOptions">复制</Button>
              </Input>
            </i-col>
            <i-col span="16">
              <div class="intro-con">
                &lt;Input style="width: 60%" v-model="inputValue"&gt;
                <br/>
                &nbsp;&nbsp;&nbsp;&lt;Button slot="append" v-clipboard="clipOptions"&gt;复制&lt;/Button&gt;
                <br/>
                &lt;/Input&gt;
                <pre class="code-con">
    clipOptions: {
      value: this.inputValue,
      success: (e) => {
        this.$Message.success('复制成功')
      },
      error: () => {
        this.$Message.error('复制失败')
      }
    }
                </pre>
              </div>
            </i-col>
          </Row>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'directive_page',
    data() {
      return {
        modalVisible: false,
        options: {
          trigger: '.ivu-modal-form-body',
          body: '.ivu-modal-form',
          recover: true
        },
        buttonOptions: {
          trigger: '.draggable-btn',
          body: '.draggable-btn'
        },
        statu: 1,
        inputValue: '这是输入的内容'
      }
    },
    computed: {
      clipOptions() {
        return {
          value: this.inputValue,
          success: (e) => {
            this.$Message.success('复制成功')
          },
          error: () => {
            this.$Message.error('复制失败')
          }
        }
      }
    },
    methods: {
      showModal() {
        this.modalVisible = true
      }
    }
  }
</script>

<style>
  .intro-con {
    min-height: 140px;
  }

  .draggable-btn {
    margin-top: 20px;
  }

  .code-con {
    width: 400px;
    background: #F9F9F9;
    padding-top: 10px;
  }
</style>
