<template>
  <ViewDefault title="Setup">
    <Tabs class="tabs-bottom">
      <Tab to="my-team">Minha Equipe</Tab>
      <Tab to="tab1">Tab Item</Tab>
      <Tab>Tab Item</Tab>
      <Tab>Tab Item</Tab>
      <Tab>Tab Item</Tab>
    </Tabs>
  </ViewDefault>
</template>

<script>
  import ViewDefault from './ViewDefault'
  import Tabs from './Tabs'
  import Tab from './Tab'

  export default {
    components: { ViewDefault, Tabs, Tab }
  }
</script>
