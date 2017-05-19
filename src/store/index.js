import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    members: [
      { avatar: 'victor.png', name: 'São Victor', email: 'sao.victor@rockcontent.com', role: 'freela' },
      { avatar: 'member1.png', name: 'Aline Costa de Olivera', email: 'aline.costa@rockcontent.com', role: 'freela' },
      { avatar: 'member8.png', name: 'Jack Daniels', email: 'jack.daniels@rockcontent.com', role: 'user' },
      { avatar: 'member2.png', name: 'Gabriela Silveira', email: 'gabriela.silveira@rockcontent.com', role: 'user' },
      { avatar: 'member3.png', name: 'Carla Alves Martins', email: 'carla@rockcontent.com', role: 'freela' },
      { avatar: 'member4.png', name: 'Bruno Pontes', email: 'bruno.pontes@rockcontent.com', role: 'user ' },
      { avatar: 'member5.png', name: 'Samuel Oliveira', email: 'samuel.oliveira@rockcontent.com', role: 'freela' },
      { avatar: 'member7.png', name: 'João Silveira', email: 'joao.silveira@rockcontent.com', role: 'user' }
    ],
    myTeam: {
      optionRole: 'all'
    }
  },
  actions: {
    VIEW_MYTEAM_FILTERS: function ({ state }, option) {
      Object.assign(state.myTeam, option)
    }
  },
  getters: {
    myTeamMembers: (state) => {
      let option = state.myTeam.optionRole
      if (option === 'all') {
        return state.members
      } else {
        return state.members.filter(member => {
          return member.role === state.myTeam.optionRole
        })
      }
    }
  }

})

export default store
