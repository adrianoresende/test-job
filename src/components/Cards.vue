<template>
  <div class="card-person">
    <!-- Avatar and Info -->
    <a href="#" class="card-info">
      <div class="circle-element card-avatar">
        <img :src="pathImage(avatar)" alt="" width="64" v-if="avatar">
        <Icon icon="user" width="40" color="#777" v-else></Icon>
      </div>
      <div class="card-person-name">
        {{ name }}
      </div>
      <div class="card-person-email">
        {{ email }}
      </div>
    </a>

    <!-- Icons -->
    <div class="card-footer">
      <a href="#" class="link-icon"><Icon icon="like"></Icon></a>
      <a href="#" class="link-icon"><Icon icon="document"></Icon></a>
      <a href="#" class="link-icon"><Icon icon="glasses"></Icon></a>
      <a href="#" class="link-icon"><Icon icon="points"></Icon></a>
    </div>
  </div>
</template>

<script>
  import Icon from './Icon'

  export default {
    components: { Icon },
    props: {
      avatar: String,
      name: String,
      email: String,
      role: String
    },
    methods: {
      pathImage (src) {
        return require('../assets/' + src)
      }
    }
  }
</script>

<style lang="scss">
  .card-person {
    flex: 1 0 200px;
    min-width: 300px;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 0 0 1px #E3E5E5;
    display: inline-block;
    margin: 0 20px 20px 0;
    transition: box-shadow .3s;
    &:hover {
      box-shadow: 0 0 0 3px #E3E5E5;
    }
    .card-info {
      display: block;
      background: #F7F9F9;
      padding: 20px;
      text-decoration: none;
    }
    .card-avatar {
      width: 64px;
      height: 64px;
      margin-bottom: 15px;
    }
    .card-person-name {
      color: #999A9A;
      font-weight: 500;
      font-size: 16px;
    }
    .card-person-email {
      color: #A5B6BD;
    }
    .card-footer {
      padding: 10px 20px;
      background: #F4F6F6;
      display: flex;
      justify-content: center;
      .link-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        margin: 10px;
        transition: opacity .3s;
        &:hover {
          .icon-like {
            fill: green;
          }
          opacity: .6;
        }
      }
    }
  }
</style>
