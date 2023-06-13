<template>
  <div>
    <div class="content">
      <h2 class="title">Tokens</h2>
      <div class="plus-item">
        <p><span class="icon">Plus 专业版</span></p>
        <div style="color: #999">Token 使用</div>
        <div>
          <span class="aaa-icon">已使用{{ used }} / 总额{{ amount }}</span>
        </div>
      </div>
      <div class="data-table">
        <n-data-table 
        :columns="columns" 
        :data="data" 
        :pagination="pagination" 
        :bordered="false" />
      </div>
      <div  class="explain ">
        <h3><img class="jia" src="../assets/images/jia.png" alt=""> 同学你好：</h3>
       <p>1）消耗tokens数量在1000,000以内，可以经续使用教学环填；</p>
       <p>2） 在2023年5月10日24号之的，如果有托tokens超过 1000,000，块一按照1,000,0001十算，无需补交员用，后续继续使用则需要开始充值；</p>
       <p>3) 同学优惠充值价格为：20元/1,000,000 tokens.</p>
       <p>4) 请注息，已充值费用，不接受退费和转造，请滩免单次大额充值；</p>
       <p>5） 充值完成后的10分钟内，对应的tokens将到帐，祝你使用使用愉快！</p>
      </div>
    </div>
  </div>
</template>
<script>
import { NButton, useMessage } from 'naive-ui'
import { h } from 'vue'
const message = useMessage()
export default {
  data() {
    return {
      used: '1,982,041',
      amount: '100,0000,000',
      columns: [
        {
          title: '方案',
          key: 'scheme',
          render(row) {
            return h(
              NButton,
              {
                secondary: true,
                size: 'small',
                type: 'primary',
                bordered:true,
                },
              { default: () => row.scheme }
            )
          }
        },
        {
          title: '描述',
          key: 'title'
        },
        {
          title: '操作',
          key: 'length',
          render(row) {
            return h(
              NButton,
              {
                quaternary: true,
                size: 'small',
                type: 'info',
                onClick: () => message.info(`Play ${row.title}`)
              },
              { default: () => '续费 100w tokens' }
            )
          }
        }
      ],
      data: [
        {
          scheme: 'Plus 专业版',
          title: '仅用于教学用途,不支持大量商用和其他非教学用途',
          length: '续费 100w tokens'
        }
      ]
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="less">
.content {
  margin: 30px;
  .title {
    padding-bottom: 12px;
    margin-bottom: 14px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
  }
  .data-table{
    border:1px solid #eee;
    border-bottom: none;
  }
  .explain{
    border:1px solid #eee;
    margin: 10px 0;
    >h3{
      position: relative;
      margin: 10px;
      font-weight: bold;
      .jia{
        position: relative;
        top: 6px;
        left: 0px;
      }
    }
    >p{
      padding: 10px;
      font-size: 13px;
    }
  }
  .plus-item {
    width: 100%;
    height: 88px;
    border: 1px solid #d6eee0;
    background-color: #edf7f2;
    margin-bottom: 10px;
    > p {
      margin-top: 10px;
    }
    > div {
      // margin: 10px;
      padding-left: 40px;
      .aaa-icon::before {
        display: inline-block;
        content: '';
        margin: 0 1px;
        vertical-align: middle;
        width: 30px;
        height: 38px;
        background: url(../assets/images/123.png) center center no-repeat;
      }
      .aaa-icon {
        font-size: 20px;
      }
    }
    .icon::before {
      display: inline-block;
      content: '';
      margin: 0 6px;
      vertical-align: middle;
      width: 30px;
      height: 30px;
      background: url(../assets/images/plus.png) center center no-repeat;
    }
  }
}
</style>
