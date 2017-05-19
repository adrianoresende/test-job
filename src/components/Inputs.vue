<!--
  WARN:
    - With icon: recomend icon with class 'icon' and size 14x14

  Props:
    - name: String
    - placeholder: String
    - title: String

  Example:
  <Inputs title="Nome" name="nome"></Inputs>

  With icon:
  <Inputs placeholder="Digite aqui...">
    <Icon icon="search" color="#BCC0C3"></Icon>
  </Inputs>

 -->
<template>
  <div class="form-control">
    <!-- Slot for icon -->
    <slot></slot>
    <input :class="{ valid: hasWords }"
           :name="name"
           :placeholder="placeholder"
           :required="required"
           @input="inputValue(text)"
           v-model="text">
    <span class="bar"></span>
    <label v-if="title">{{ title }}</label>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      name: String,
      placeholder: String,
      required: Boolean
    },
    data () {
      return {
        text: ''
      }
    },
    methods: {
      inputValue: function (text) {
        this.$emit('input', text)
      }
    },
    computed: {
      hasWords: function () {
        return this.text.length > 0
      }
    }
  }
</script>

<style lang="scss">
  .form-control {
    position: relative;
    margin-top: 10px;
    margin-bottom: 25px;
    input, select {
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
      color: #8F8F8F;
      background: transparent;
      font-size:14px;
      padding:10px 0;
      display:block;
      width:100%;
      border:none;
      border-bottom:1px solid #ACADAD;
      &::placeholder {
        color: #9BAEB7
      }
      &:focus {
        outline:none
      }
      &:focus ~ label,
      &.valid ~ label {
        color: #bbb;
        top:-8px;
        font-size:12px;
        font-weight: 500;
      }
      &:focus ~ .bar:before,
      &:focus ~ .bar:after {
        width:50%;
      }
    }
    label {
      font-size:14px;
      color: #8F8F8F;
      font-weight:normal;
      position:absolute;
      pointer-events:none;
      left:0;
      top:10px;
      transition:0.2s ease all;
    }
    .bar {
      position:relative;
      display:block;
      width:100%;
      &:before,
      &:after {
        content:'';
        height:1px;
        width:0;
        bottom:1px;
        position:absolute;
        background: #ACADAD;
        transition:0.2s ease all;
        -moz-transition:0.2s ease all;
        -webkit-transition:0.2s ease all;
      }
      &:before {
        left:50%;
      }
      &:after {
        right:50%;
      }
    }

    // With Icon
    .icon {
      position: absolute;
      left: 13px;
      bottom: 16px;
      ~ input {
        padding-left: 40px;
      }
      ~ .bar {
        width: calc(100% + 40px);
      }
      ~ label {
        margin-left: 40px;
      }
    }
    &.input-search {
      min-width: 360px;
      margin:0;
    }
  }
</style>
