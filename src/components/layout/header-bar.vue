<!-- eslint-disable vue/valid-v-slot -->
<template>
   <div class="header">
      <div class="logo-box">
        <img src="../../assets/images/logo.png" alt="">
        <div class="right">
          <n-button  class="btn" ghost size="small" quaternary  text-color="#000">
            <template #icon>
              <Icon>
               <AntennaBars4 />
              </Icon>
            </template>
          chatGPT
          </n-button>
          <img src="../../assets/images/user.png" alt="">
          <span style="font-size: 12px;">{{ userName }}</span>
          <img src="../../assets/images//down.png" alt="">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { AntennaBars4 } from '@vicons/tabler'
  import { Icon } from '@vicons/utils'
  export default {
    name: 'header-bar',
    components:{
      Icon,
      AntennaBars4,
    },
    data() {
      return {
        userName:'亢熠@ChatGPT'
      }
    },
    mounted() {

    },
    methods: {
      
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="less">
  .header {
  width: 100%;
  margin: 0 auto;
  height: 55px;
  line-height: 23px;
  border-bottom: 1px solid #e3e4e5;
}
.logo-box {
  display: flex;
  justify-content: space-between;
  padding: 13px 15px;
}
.right{
  display: flex;
  justify-content: center;
  align-items: center;
  >.btn{
    margin-right: 6px;
    border: 1px solid rgba(200, 220, 201, 1);
    border-image: linear-gradient(to right, #3f02fe, green) 4;
  }
  >img{
    cursor: pointer;
    margin-left: 3px;
  }
}
</style>
  