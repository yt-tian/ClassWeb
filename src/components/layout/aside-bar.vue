<template>
  <div class="tabs">
    <div 
      class="tabs-item  "
      v-for="(item, i) of tabList"
      :key="i"
      :class="item.isActive ? 'active' : ''"
      @click="tabClick(i)"
    >
      <div class="txt">{{ item.txt }}</div>
    </div>
    <!-- <div class="tabs-item">
      <img class="icon" src="../../assets/text.png" alt="">
      <div class="txt">文案</div>
    </div> -->
  </div>
</template>
<script>

export default {
  data() {
    return {
      tabList: [
        { txt: '我的课程', path: '/home/classPage', isActive: false },
        { txt: '账户设置', path: '/home/accountSetting', isActive: false },
        { txt: '订单信息', path: '/home/OrderInfo', isActive: false },
        { txt: 'Tokens', path: '/home/tokensPage', isActive: true },
      ]
    }
  },
  computed:{

  },
  mounted(){

  },
  methods:{
    tabClick(i) {
      this.tabList.forEach((item, index) => {
        item.isActive = i === index;
        if (i === index) {
          this.$router.push(item.path);
        }
      });
    }
  },
}
</script>
<style scoped>
.tabs {
  width: var(--side-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.active {
  background-color: #e7f5ee;
  color: #48ae71;
  border-radius: 5px;
}
.tabs-item {
  width: 180px;
  height: 46px;
  font-size: 16px;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding-left: 20px;
  text-align: left;
  margin: 10px 0px;
  cursor: pointer;
}
.icon{
  padding-top: 6px;
}
</style>
