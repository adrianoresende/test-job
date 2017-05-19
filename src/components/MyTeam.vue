<template>
  <ContainerDefault>

    <!-- Header -->
    <template slot="header">
      <!-- Search -->
      <Inputs class="input-search"
              placeholder="Digite uma palavra-chave e tecle enter para buscar"
              v-model="searchQuery">
        <Icon icon="search" color="#BCC0C3"></Icon>
      </Inputs>

      <!-- Buttons -->
      <ActionHorizontal title="Visualizar">
        <div class="btn-groups">
          <a href="#" class="btn" :class="{ active: optionRole === 'freela' }" @click="filterRole('freela')">
            Freelas
          </a>
          <a href="#" class="btn" :class="{ active: optionRole === 'user' }" @click="filterRole('user')">
            Usuários
          </a>
        </div>
        <a href="#" class="btn btn-success btn-lg m-l" @click="modalAddMember = true">Novo membro</a>
      </ActionHorizontal>
    </template>

    <!-- List Cards -->
    <Cards v-for="member in filteredMembers"
           :avatar="member.avatar"
           :name="member.name"
           :email="member.email"
           :role="member.role">
    </Cards>

    <!-- Window New Member -->
    <ModalSide title="Novo membro" @close="modalAddMember = false" v-if="modalAddMember">
      <form @submit.prevent="addMember">
        <Inputs v-model="newMember.name" title="Nome" name="name" required></Inputs>
        <Inputs v-model="newMember.email" title="E-mail" name="email" type="email" required></Inputs>
        <Selects v-model="newMember.role" title="Função de trabalho" name="funcao" required>
          <option value="freela">Freelancer</option>
          <option value="user">Usuário</option>
        </Selects>
        <button type="submit" class="btn btn-primary btn-lg btn-right">Criar membro da equipe</button>
      </form>
    </ModalSide>

  </ContainerDefault>
</template>

<script>
  import ContainerDefault from './ContainerDefault'
  import Cards from './Cards'
  import ActionHorizontal from './ActionHorizontal'
  import ModalSide from './ModalSide'
  import Inputs from './Inputs'
  import Selects from './Selects'
  import Icon from './Icon'

  export default {
    data () {
      return {
        modalAddMember: false,
        showRole: 'all',
        searchQuery: '',
        newMember: {
          avatar: '',
          name: '',
          email: '',
          role: ''
        }
      }
    },
    computed: {
      members () {
        return this.$store.state.members
      },
      optionRole () {
        return this.$store.state.myTeam.optionRole
      },
      filteredMembers () {
        var self = this
        return self.$store.getters.myTeamMembers.filter((member) => {
          var searchRegex = new RegExp(self.searchQuery, 'i')
          return searchRegex.test(member.name) ||
                 searchRegex.test(member.email)
        })
      }
    },
    methods: {
      addMember () {
        this.members.unshift(this.newMember)
        this.modalAddMember = false
        this.showMemberCreated()
      },
      filterRole (role) {
        role === this.optionRole ? role = 'all' : role
        this.$store.dispatch('VIEW_MYTEAM_FILTERS', {optionRole: role})
      }
    },
    notifications: {
      showMemberCreated: {
        title: 'Novo membro',
        message: 'Criado com sucesso!',
        type: 'success'
      }
    },
    components: { ContainerDefault, Cards, ActionHorizontal, ModalSide, Inputs, Selects, Icon }
  }
</script>
