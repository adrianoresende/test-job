<template>
  <div class="form-control">
    <select :name="name"
            :class="{ valid: hasWord }"
            @change="onChange(text)"
            v-model="text">
      <option disabled value=""></option>
      <slot></slot>
    </select>
    <span class="bar"></span>
    <label v-if="title">{{ title }}</label>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      name: String,
      placeholder: String
    },
    data () {
      return {
        text: ''
      }
    },
    methods: {
      onChange: function (text) {
        this.$emit('input', text)
      }
    },
    computed: {
      hasWord: function () {
        return this.text.length > 0
      }
    }
  }
</script>

<style lang="scss">
  .form-control {
    select {
      padding:10px 0;
      height: 37px;
      appearance: none;
      border-radius: 0;
    }
  }
</style>
