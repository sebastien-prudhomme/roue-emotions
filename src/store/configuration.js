import { i18n } from '../boot/i18n'

const EMOTIONS = [
  {
    icon: 'img:emotions/rigolett-tired.png',
    text: i18n.t('emotions.tired')
  },
  {
    icon: 'img:emotions/rigolett-offended.png',
    text: i18n.t('emotions.offended')
  },
  {
    icon: 'img:emotions/rigolett-calm.png',
    text: i18n.t('emotions.calm')
  },
  {
    icon: 'img:emotions/rigolett-happy.png',
    text: i18n.t('emotions.happy')
  },
  {
    icon: 'img:emotions/rigolett-joyful.png',
    text: i18n.t('emotions.joyful')
  },
  {
    icon: 'img:emotions/rigolett-angry.png',
    text: i18n.t('emotions.angry')
  },
  {
    icon: 'img:emotions/rigolett-jealous.png',
    text: i18n.t('emotions.jealous')
  },
  {
    icon: 'img:emotions/rigolett-scared.png',
    text: i18n.t('emotions.scared')
  },
  {
    icon: 'img:emotions/rigolett-sad.png',
    text: i18n.t('emotions.sad')
  },
  {
    icon: 'img:emotions/rigolett-disappointed.png',
    text: i18n.t('emotions.disappointed')
  }
]

const NEEDS = [
  i18n.t('needs.to_rest'),
  i18n.t('needs.to_let_off_steam'),
  i18n.t('needs.help'),
  i18n.t('needs.support'),
  i18n.t('needs.to_cry'),
  i18n.t('needs.to_ask_for_forgiveness'),
  i18n.t('needs.to_laugh'),
  i18n.t('needs.to_take_care_of_myself'),
  i18n.t('needs.tenderness'),
  i18n.t('needs.quiet'),
  i18n.t('needs.encouragement'),
  i18n.t('needs.to_be_alone')
]

const ACTIONS = [
  i18n.t('actions.ask_for_a_time_of_silence'),
  i18n.t('actions.ask_for_information'),
  i18n.t('actions.draw_attention'),
  i18n.t('actions.talk_to_someone'),
  i18n.t('actions.go_somewhere_quiet'),
  i18n.t('actions.let_my_tears_flow'),
  i18n.t('actions.think_of_my_qualities'),
  i18n.t('actions.get_a_drink_of_water'),
  i18n.t('actions.do_a_breathing_exercise'),
  i18n.t('actions.tell_a_joke'),
  i18n.t('actions.draw'),
  i18n.t('actions.sing_and_or_dance'),
  i18n.t('actions.ask_for_a_massage'),
  i18n.t('actions.go_out_to_get_some_fresh_air'),
  i18n.t('actions.muster_my_courage'),
  i18n.t('actions.think_of_my_favorite_hero')
]

export default {
  namespaced: true,
  state () {
    return {
      emotions: [...EMOTIONS],
      needs: [...NEEDS],
      actions: [...ACTIONS]
    }
  },
  mutations: {
    createAction: function (state, payload) {
      // Vue wraps unshift() for reactivity
      state.actions.unshift(payload.action.trim())
    },
    createEmotion: function (state, payload) {
      // Vue wraps unshift() for reactivity
      state.emotions.unshift(payload.emotion)
    },
    createNeed: function (state, payload) {
      // Vue wraps unshift() for reactivity
      state.needs.unshift(payload.need.trim())
    },
    removeAction: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.actions.splice(payload.index, 1)
    },
    removeEmotion: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.emotions.splice(payload.index, 1)
    },
    removeNeed: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.needs.splice(payload.index, 1)
    },
    resetActions: function (state, payload) {
      state.actions = [...ACTIONS]
    },
    resetEmotions: function (state, payload) {
      state.emotions = [...EMOTIONS]
    },
    resetNeeds: function (state, payload) {
      state.needs = [...NEEDS]
    },
    setActions: function (state, payload) {
      state.actions = payload.actions
    },
    setEmotions: function (state, payload) {
      state.emotions = payload.emotions
    },
    setNeeds: function (state, payload) {
      state.needs = payload.needs
    },
    updateAction: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.actions.splice(payload.index, 1, payload.action.trim())
    },
    updateEmotion: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.emotions.splice(payload.index, 1, payload.emotion)
    },
    updateNeed: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.needs.splice(payload.index, 1, payload.need.trim())
    }
  },
  actions: {
    createAction: function (context, payload) {
      context.commit('createAction', payload)
    },
    createEmotion: function (context, payload) {
      context.commit('createEmotion', payload)
    },
    createNeed: function (context, payload) {
      context.commit('createNeed', payload)
    },
    removeAction: function (context, payload) {
      context.commit('removeAction', payload)
    },
    removeEmotion: function (context, payload) {
      context.commit('removeEmotion', payload)
    },
    removeNeed: function (context, payload) {
      context.commit('removeNeed', payload)
    },
    resetActions: function (context, payload) {
      context.commit('resetActions', payload)
    },
    resetEmotions: function (context, payload) {
      context.commit('resetEmotions', payload)
    },
    resetNeeds: function (context, payload) {
      context.commit('resetNeeds', payload)
    },
    setActions: function (context, payload) {
      context.commit('setActions', payload)
    },
    setEmotions: function (context, payload) {
      context.commit('setEmotions', payload)
    },
    setNeeds: function (context, payload) {
      context.commit('setNeeds', payload)
    },
    updateAction: function (context, payload) {
      context.commit('updateAction', payload)
    },
    updateEmotion: function (context, payload) {
      context.commit('updateEmotion', payload)
    },
    updateNeed: function (context, payload) {
      context.commit('updateNeed', payload)
    }
  }
}
