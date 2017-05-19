<!--
  Props:
    - title: String

  Example:
  <ModalSide title="Título">
    Texto ou Formulário aqui!
  </ModalSide>
 -->
<template>
  <transition name="modal">
    <div class="modal-area">
      <div class="modal-side">

        <!-- Header -->
        <div class="modal-header">{{ title }}</div>
        <div class="modal-body">
          <slot></slot>
        </div>

        <!-- Close -->
        <a href="#" class="modal-close" @click="$emit('close')">
          <Icon icon="close" color="#CFD8DC"></Icon>
        </a>
      </div>
      <!-- Background Fade -->
      <div class="bg-fade" @click="$emit('close')"></div>
    </div>
  </transition>
</template>

<script>
  import Icon from './Icon'

  export default {
    components: { Icon },
    props: {
      title: String
    }
  }
</script>

<style lang="scss">
  .modal-area {
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index: 5;
    overflow: hidden;
    .modal-side {
      background: #F9FAFA;
      box-shadow: -4px 0 32px 0 rgba(0,0,0,0.06), -1px 0 8px 0 rgba(0,0,0,0.04);
      position: absolute;
      top:0;
      bottom:0;
      right:0;
      z-index: 5;
      min-width: 500px;
      transition: transform .3s;
      .modal-header {
        background: #fff;
        font-size: 20px;
        font-weight: 500;
        color: #9E9E9E;
        padding: 20px 30px;
      }
      .modal-body {
        padding: 20px 30px;
      }
      .modal-close {
        background: #fff;
        padding: 10px 15px 9px 15px;
        border-radius: 3px;
        position: absolute;
        top: 12px;
        left: -33px;
      }
    }
  }

  // Transition Modal
  .modal-enter-active, .modal-leave-active {
    transition: opacity .3s;
  }
  .modal-enter, .modal-leave-to {
    opacity: 0;
  }
  .modal-enter {
    .modal-side {
      transform: translateX(900px);
    }
  }
  .modal-leave-to {
    .modal-side {
      transform: translateX(900px);
    }
  }
</style>
