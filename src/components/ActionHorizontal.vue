<template>
  <div class="actions-horizontal">
    <div class="actions-title">{{ title }}:</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="scss">
  .actions-horizontal {
    .actions-title {
      color: #90A4AE;
      font-size: 14px;
      margin-right: 10px;
      display: inline-block;
    }
  }
</style>
