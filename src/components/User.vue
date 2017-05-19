<template>
  <Dropdown class="user-nav">
    Olá, {{ user.name }}
    <ul slot="list">
      <li><a href="#">Minha conta</a></li>
      <li><a href="#">Sair</a></li>
    </ul>
  </Dropdown>
</template>

<script>
  import Dropdown from './Dropdown.vue'

  export default {
    name: 'user',
    components: { Dropdown },
    data () {
      return {
        user: {
          name: 'Carlos'
        }
      }
    }
  }
</script>
