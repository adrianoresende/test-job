<!--
  Example:
  <Dropdown>
    Text
    <ul slot="list">
      <li><a href="#">List 1</a></li>
      <li><a href="#">List 2</a></li>
    </ul>
  </Dropdown>

  TODO:
  - Close if click in area out dropdown
 -->
<template>
  <div>
    <ul class="dropdown" :class="{ active: isVisible }">
      <li>
        <button @click="toggleDropdown($event)">
          <slot></slot>
          <Icon icon="arrow-down" width="8"></Icon>
        </button>
        <slot name="list"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
  import Icon from './Icon.vue'

  export default {
    name: 'dropdown',
    components: { Icon },

    data () {
      return {
        isVisible: false
      }
    },

    methods: {
      toggleDropdown (e) {
        this.isVisible = !this.isVisible
        if (this.isVisible) {
          this.isVisible = true
        } else {
          this.isVisible = false
        }
      }
    }
  }
</script>

<style lang="scss">
  .dropdown {
    position: relative;
    display: inline-block;
    list-style: none;
    padding: 0;
    margin: 0;
    button {
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
      cursor: pointer;
      font-weight: 500; //Medium
      font-size: 14px;
      color: #929FA5;
      padding: 10px 20px;
      background: none;
      border: 0;
      border-radius: 3px;
      transition: box-shadow .2s, background .3s;
      &:hover {
        background: #e8e8e8;
      }
      &:focus {
        outline: none;
      }
    }
    .icon {
      margin-left: 5px;
    }

    // Submenu
    &.active {
      button {
        background: #e2e2e2;
        color: #888;
      }
      ul {
        display: block;
      }
      .icon {
        transform: rotate(180deg) scaleX(-1);
      }
    }
    > li > ul {
      list-style: none;
      display: none;
      width: 170px;
      background: #fff;
      border-radius: 3px;
      padding: 10px 0;
      position: absolute;
      top:40px;
      right: 0;
      box-shadow: 0 3px 20px 0 rgba(0,0,0,0.2);
      a {
        color: #455A64;
        display: block;
        text-decoration: none;
        padding: 5px 20px;
        margin: 5px 0;
        transition: box-shadow .2s;
        &:hover {
          box-shadow: inset 2px 0 0 lighten(#263238,60%);
        }
        &.active {
          box-shadow: inset 2px 0 0 #263238;
        }
      }
    }
  }
</style>
