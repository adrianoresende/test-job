<template>
  <ul class="tabs-nav">
    <slot></slot>
  </ul>
</template>

<style lang="scss">
  .tabs-nav {
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      margin-right: 10px;
      a {
        display: inline-block;
        padding: 13px 20px;
        text-transform: uppercase;
        font-size:12px;
        font-weight: 500;
        text-decoration: none;
        color:#82898D;
        border-radius: 2px 2px 0 0;
        transition: background .3s, color .3s, box-shadow .3s;
        &:hover {
          background: #E7E9EA;
        }
        &.active {
          background: #F3F5F6;
          box-shadow: 0 -2px 0 #87C06D;
          color: #87C06D;
        }
      }
    }
    &.tabs-bottom {
      position: absolute;
      bottom: 0;
    }
  }
</style>
