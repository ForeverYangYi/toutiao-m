<template>
  <div id="app">
    <!-- 路由的出口 -->
    <router-view />
    <h1>黑马头条</h1>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <hr />
    <van-button icon="plus" type="primary" />
    <van-button icon="plus" type="primary">按钮</van-button>
    <van-button
      icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
      type="primary"
    >
      按钮
    </van-button>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="less"></style>
