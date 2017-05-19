<template>
  <div class="view-main">
    <div class="view-header">
      <User></User>
      <div class="view-title" v-if="title">{{ title }}</div>
      <slot></slot>
    </div>
    <div class="view-subview">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import User from './User'

  export default {
    components: { User },
    props: {
      title: String
    }
  }
</script>

<style lang="scss">
  @import '../assets/variables';

  .view-main {
    flex: 1 1 auto;
    margin-left: $widthMenu;
    display: flex;
    flex-direction: column;
    .view-header {
      position: relative;
      padding: 20px 35px 0;
      min-height: 110px;
      background: #EFF1F2;
      box-shadow: inset 0 -1px 0 0 #E5E7E8;
      .view-title {
        padding: 12px 0;
        font-weight: 500; //Medium
        font-size: 20px;
        color: #607D8B;
      }
    }
    .view-subview {
      background-color: #F3F5F6;
      padding: 30px 35px 20px;
      flex: 1 0 auto;
    }
  }
  .user-nav {
    position: absolute;
    top: 32px;
    right: 20px;
  }
</style>
