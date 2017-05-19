<!--
  Exemple:
  <Tab to="contact">Contact</Tab>
  <Tab url="#tab2">Tab Item</Tab>
 -->
<template>
  <li>
    <!-- Link for Router -->
    <router-link :to="to" class="nav-item" v-if="to">
      <slot></slot>
    </router-link>

    <!-- Link Default -->
    <a :href="url" v-else>
      <slot></slot>
    </a>
  </li>
</template>

<script>
  export default {
    props: {
      to: String,
      url: {
        type: String,
        default: '#'
      }
    }
  }
</script>
