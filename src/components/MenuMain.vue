<template>
  <div id="nav-main" class="nav-vertical">
    <router-link to="/">
      <div class="circle-element">
        <div class="avatar"></div>
      </div>
    </router-link>

    <router-link to="/tasks" class="nav-item">
      <div class="circle-element">
        <div class="no-icon"></div>
      </div>
      <div class="nav-title">Tasks</div>
    </router-link>

    <router-link to="/contents" class="nav-item">
      <div class="circle-element">
        <div class="no-icon"></div>
      </div>
      <div class="nav-title">Contents</div>
    </router-link>

    <router-link to="/setup" class="nav-item">
      <div class="circle-element">
        <div class="no-icon"></div>
      </div>
      <div class="nav-title">Setup</div>
    </router-link>

  </div>
</template>

<style lang="scss">
  @import '../assets/variables';

  .nav-vertical {
    display: inline-block;
    position: fixed;
    top:0;
    bottom:0;
    z-index: 1;
    width: $widthMenu;
    padding: 20px 0;
    background: #fff;
    box-shadow: 1px 0 1px 0 rgba(0,0,0,0.08), 1px 0 8px 0 rgba(0,0,0,0.04);
    text-align: center;
    .nav-item {
      text-decoration: none;
      padding:15px 20px;
      display: block;
      margin-top: 20px;
      transition: box-shadow .3s;
      .no-icon {
        background: #999;
        width: 24px;
        height: 24px;
      }
      .nav-title {
        text-transform: uppercase;
        margin-top: 15px;
        font-size:12px;
        color: #999;
      }
      &:hover {
        box-shadow: inset -2px 0 0 lighten(#263238,60%);
      }
      &.active {
        box-shadow: inset -2px 0 0 #263238;
      }
      &:focus {
        border:0;
      }
    }
    .avatar {
      background: #999;
      width: 40px;
      height: 40px;
    }
  }
</style>
