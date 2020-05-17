export default {
  namespaced: true,
  state () {
    return {
      feelings: [
        'Fatigué/Fatiguée',
        'Vexé/Vexée',
        'Calme',
        'Content/Contente',
        'Joyeux/Joyeuse',
        'En colère',
        'Jaloux/Jalouse',
        'Effrayé/Effrayée',
        'Triste',
        'Déçu/Déçue'
      ],
      needs: [
        'De me reposer',
        'De me défouler',
        'D\'aide',
        'De soutien',
        'De pleurer',
        'De demander pardon',
        'De rigoler',
        'De prendre soin de moi',
        'De tendresse',
        'De calme',
        'D\'encouragement',
        'D\'être seul/seule'
      ],
      actions: [
        'Demander un temps de silence',
        'Demander des informations',
        'Attirer l\'attention',
        'Parler à quelqu\'un',
        'Aller dans un endroit calme',
        'Laisser couler mes larmes',
        'Penser à mes qualités',
        'Aller boire de l\'eau',
        'Faire un exercice de respiration',
        'Raconter une blague',
        'Dessiner',
        'Chanter et/ou danser',
        'Demander un massage',
        'Sortir prendre l\'air',
        'Rassembler mon courage',
        'Penser à mon héros favori'
      ]
    }
  },
  mutations: {
    createNeed: function (state, payload) {
      // Vue wraps unshift() for reactivity
      state.needs.unshift(payload.need)
    },
    removeNeed: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.needs.splice(payload.index, 1)
    },
    setNeeds: function (state, payload) {
      state.needs = payload.needs
    },
    updateNeed: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.needs.splice(payload.index, 1, payload.need)
    }
  },
  actions: {
    createNeed: function (context, payload) {
      context.commit('createNeed', payload)
    },
    removeNeed: function (context, payload) {
      context.commit('removeNeed', payload)
    },
    setNeeds: function (context, payload) {
      context.commit('setNeeds', payload)
    },
    updateNeed: function (context, payload) {
      context.commit('updateNeed', payload)
    }
  }
}
