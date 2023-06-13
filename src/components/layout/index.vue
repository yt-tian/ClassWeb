<template>
  <div class="layout">
    <div class="header-wrap">
      <header-bar></header-bar>
    </div>
    <div class="content">
      <div class="left">
        <aside-bar></aside-bar>
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
    <footer class="footer">
        <div class="about">
          <div><a>关于我们</a><a>老师入住</a><a>合作机构</a></div>
          <div style="color: #999;">陕ICP2023232332</div>
        </div>
        <div class="copy-right">Copyright © 2008 ~ 2022 ShangKe.chat All Right Reserved.</div>
    </footer>
    <div class="informer">
      <img src="../../assets/images/aaa.png" alt="">
    </div>
  </div>
</template>
<script>
import headerBar from './header-bar.vue'
import asideBar from './aside-bar.vue'
export default {
  components:{
    headerBar,
    asideBar
  },
  data() {
    return {

    }
  },
  computed:{

  },
  mounted(){

  },
  methods:{

  },
}
</script>
<style scoped lang="less">
.layout {
  height: 100%;
  .informer{
    position: fixed;
    right: 30px;
    bottom: 30px;
    border: 1px solid #eceef0;
  }
}
  .header-wrap{
    height: var(--head-height);
  }
  .content {
    height: calc(100% - var(--head-height) - 1px);
    display: flex;
  }
  .content .left {
    width: var(--side-width);
    margin:10px 10px 10px 30px;
    border: 1px solid #eceef0;
    /* box-shadow:  2px 1px 2px 1px #eceef0; */
    height: 100%;
  }
  .content .right {
    margin: 10px;
    width: calc(100% - var(--side-width));
    border: 1px solid #eceef0;
  }
  .footer{
    position: fixed;
    width: 100%;
    // height: 100px;
    bottom: 0;
    background-color: #fafafa;
    >div{
      padding: 16px 0;
      margin: 0 30px;
    }
    .copy-right{
      color: #999;
      font-size: 14px;
    }
    .about{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eceef0;
      font-size: 14px;

      >div{
        >a{
        padding: 0 8px;
        color: #000;
        cursor: pointer;
      }
      }
     
    }
  }
</style>
