<template>
  <div>
    <div class="container-header">
        <slot name="header"></slot>
    </div>
    <div class="container-body">
        <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .container-header {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }
</style>
