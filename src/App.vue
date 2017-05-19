<template>
  <div id="app">

    <!-- Nav Main -->
    <MenuMain></MenuMain>

    <!-- View -->
    <transition name="fade-view">
      <router-view></router-view>
    </transition>

    <!-- Widget Chat -->
    <a href="#" id="widget-chat">
      <img src="./assets/chat.png" alt="Chat Online">
    </a>

  </div>
</template>

<script>
  import MenuMain from './components/MenuMain.vue'
  import miniToastr from 'mini-toastr'

  export default {
    name: 'app',
    components: { MenuMain },
    ready () {
      miniToastr.init()
    }
  }
</script>

<style lang="scss">
  @import "./assets/global.scss";
</style>
