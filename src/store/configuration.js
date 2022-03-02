import { i18n } from '../boot/i18n'

const PROFILE = {
  name: i18n.global.t('profile_name_default')
}

const EMOTIONS = [
  {
    icon: 'img:emotions/rigolett/tired.png',
    text: i18n.global.t('emotions.tired')
  },
  {
    icon: 'img:emotions/rigolett/offended.png',
    text: i18n.global.t('emotions.offended')
  },
  {
    icon: 'img:emotions/rigolett/calm.png',
    text: i18n.global.t('emotions.calm')
  },
  {
    icon: 'img:emotions/rigolett/happy.png',
    text: i18n.global.t('emotions.happy')
  },
  {
    icon: 'img:emotions/rigolett/joyful.png',
    text: i18n.global.t('emotions.joyful')
  },
  {
    icon: 'img:emotions/rigolett/angry.png',
    text: i18n.global.t('emotions.angry')
  },
  {
    icon: 'img:emotions/rigolett/jealous.png',
    text: i18n.global.t('emotions.jealous')
  },
  {
    icon: 'img:emotions/rigolett/scared.png',
    text: i18n.global.t('emotions.scared')
  },
  {
    icon: 'img:emotions/rigolett/sad.png',
    text: i18n.global.t('emotions.sad')
  },
  {
    icon: 'img:emotions/rigolett/disappointed.png',
    text: i18n.global.t('emotions.disappointed')
  }
]

const NEEDS = [
  i18n.global.t('needs.to_rest'),
  i18n.global.t('needs.to_let_off_steam'),
  i18n.global.t('needs.help'),
  i18n.global.t('needs.support'),
  i18n.global.t('needs.to_cry'),
  i18n.global.t('needs.to_ask_for_forgiveness'),
  i18n.global.t('needs.to_laugh'),
  i18n.global.t('needs.to_take_care_of_myself'),
  i18n.global.t('needs.tenderness'),
  i18n.global.t('needs.quiet'),
  i18n.global.t('needs.encouragement'),
  i18n.global.t('needs.to_be_alone')
]

const ACTIONS = [
  i18n.global.t('actions.ask_for_a_time_of_silence'),
  i18n.global.t('actions.ask_for_information'),
  i18n.global.t('actions.draw_attention'),
  i18n.global.t('actions.talk_to_someone'),
  i18n.global.t('actions.go_somewhere_quiet'),
  i18n.global.t('actions.let_my_tears_flow'),
  i18n.global.t('actions.think_of_my_qualities'),
  i18n.global.t('actions.get_a_drink_of_water'),
  i18n.global.t('actions.do_a_breathing_exercise'),
  i18n.global.t('actions.tell_a_joke'),
  i18n.global.t('actions.draw'),
  i18n.global.t('actions.sing_and_or_dance'),
  i18n.global.t('actions.ask_for_a_massage'),
  i18n.global.t('actions.go_out_to_get_some_fresh_air'),
  i18n.global.t('actions.muster_my_courage'),
  i18n.global.t('actions.think_of_my_favorite_hero')
]

export default {
  namespaced: true,
  state () {
    return {
      profileIndex: 0,
      profiles: [{
        ...PROFILE,
        emotions: [...EMOTIONS],
        needs: [...NEEDS],
        actions: [...ACTIONS]
      }]
    }
  },
  getters: {
    actions: function (state) {
      return state.profiles[state.profileIndex].actions
    },
    emotions: function (state) {
      return state.profiles[state.profileIndex].emotions
    },
    needs: function (state) {
      return state.profiles[state.profileIndex].needs
    }
  },
  mutations: {
    createAction: function (state, payload) {
      // Vue wraps unshift() for reactivity
      state.profiles[state.profileIndex].actions.unshift(payload.action.trim())
    },
    createEmotion: function (state, payload) {
      // Vue wraps unshift() for reactivity
      state.profiles[state.profileIndex].emotions.unshift(payload.emotion)
    },
    createNeed: function (state, payload) {
      // Vue wraps unshift() for reactivity
      state.profiles[state.profileIndex].needs.unshift(payload.need.trim())
    },
    createProfile: function (state, payload) {
      const newProfile = {
        name: payload.profile.trim(),
        emotions: [...EMOTIONS],
        needs: [...NEEDS],
        actions: [...ACTIONS]
      }

      // Vue wraps push() for reactivity
      state.profiles.push(newProfile)
    },
    removeAction: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.profiles[state.profileIndex].actions.splice(payload.index, 1)
    },
    removeEmotion: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.profiles[state.profileIndex].emotions.splice(payload.index, 1)
    },
    removeNeed: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.profiles[state.profileIndex].needs.splice(payload.index, 1)
    },
    removeProfile: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.profiles.splice(payload.index, 1)
    },
    resetActions: function (state, payload) {
      state.profiles[state.profileIndex].actions = [...ACTIONS]
    },
    resetEmotions: function (state, payload) {
      state.profiles[state.profileIndex].emotions = [...EMOTIONS]
    },
    resetNeeds: function (state, payload) {
      state.profiles[state.profileIndex].needs = [...NEEDS]
    },
    resetProfiles: function (state, payload) {
      state.profileIndex = 0

      state.profiles = [{
        ...PROFILE,
        emotions: [...EMOTIONS],
        needs: [...NEEDS],
        actions: [...ACTIONS]
      }]
    },
    setActions: function (state, payload) {
      state.profiles[state.profileIndex].actions = payload.actions
    },
    setEmotions: function (state, payload) {
      state.profiles[state.profileIndex].emotions = payload.emotions
    },
    setNeeds: function (state, payload) {
      state.profiles[state.profileIndex].needs = payload.needs
    },
    setProfileIndex: function (state, payload) {
      state.profileIndex = payload.profileIndex
    },
    updateAction: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.profiles[state.profileIndex].actions.splice(payload.index, 1, payload.action.trim())
    },
    updateEmotion: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.profiles[state.profileIndex].emotions.splice(payload.index, 1, payload.emotion)
    },
    updateNeed: function (state, payload) {
      // Vue wraps splice() for reactivity
      state.profiles[state.profileIndex].needs.splice(payload.index, 1, payload.need.trim())
    },
    updateProfile: function (state, payload) {
      const profile = state.profiles[payload.index]

      const newProfile = {
        name: payload.profile.trim(),
        emotions: [...profile.emotions],
        needs: [...profile.needs],
        actions: [...profile.actions]
      }

      // Vue wraps splice() for reactivity
      state.profiles.splice(payload.index, 1, newProfile)
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
    createProfile: function (context, payload) {
      context.commit('createProfile', payload)
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
    removeProfile: function (context, payload) {
      context.commit('removeProfile', payload)
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
    resetProfiles: function (context, payload) {
      context.commit('resetProfiles', payload)
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
    setProfileIndex: function (context, payload) {
      context.commit('setProfileIndex', payload)
    },
    updateAction: function (context, payload) {
      context.commit('updateAction', payload)
    },
    updateEmotion: function (context, payload) {
      context.commit('updateEmotion', payload)
    },
    updateNeed: function (context, payload) {
      context.commit('updateNeed', payload)
    },
    updateProfile: function (context, payload) {
      context.commit('updateProfile', payload)
    }
  }
}
