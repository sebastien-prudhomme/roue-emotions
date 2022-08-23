import { defineStore } from 'pinia'
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

export const useConfigurationStore = defineStore('configuration', {
  persist: true,
  state: () => ({
    profileIndex: 0,
    profiles: [{
      ...PROFILE,
      emotions: [...EMOTIONS],
      needs: [...NEEDS],
      actions: [...ACTIONS]
    }]
  }),
  getters: {
    actions (state) {
      return state.profiles[state.profileIndex].actions
    },
    emotions (state) {
      return state.profiles[state.profileIndex].emotions
    },
    needs (state) {
      return state.profiles[state.profileIndex].needs
    }
  },
  actions: {
    createAction (payload) {
      // Vue wraps unshift() for reactivity
      this.profiles[this.profileIndex].actions.unshift(payload.action.trim())
    },
    createEmotion (payload) {
      // Vue wraps unshift() for reactivity
      this.profiles[this.profileIndex].emotions.unshift(payload.emotion)
    },
    createNeed (payload) {
      // Vue wraps unshift() for reactivity
      this.profiles[this.profileIndex].needs.unshift(payload.need.trim())
    },
    createProfile (payload) {
      const newProfile = {
        name: payload.profile.trim(),
        emotions: [...EMOTIONS],
        needs: [...NEEDS],
        actions: [...ACTIONS]
      }

      // Vue wraps push() for reactivity
      this.profiles.push(newProfile)
    },
    removeAction (payload) {
      // Vue wraps splice() for reactivity
      this.profiles[this.profileIndex].actions.splice(payload.index, 1)
    },
    removeEmotion (payload) {
      // Vue wraps splice() for reactivity
      this.profiles[this.profileIndex].emotions.splice(payload.index, 1)
    },
    removeNeed (payload) {
      // Vue wraps splice() for reactivity
      this.profiles[this.profileIndex].needs.splice(payload.index, 1)
    },
    removeProfile (payload) {
      // Vue wraps splice() for reactivity
      this.profiles.splice(payload.index, 1)
    },
    resetActions (payload) {
      this.profiles[this.profileIndex].actions = [...ACTIONS]
    },
    resetEmotions (payload) {
      this.profiles[this.profileIndex].emotions = [...EMOTIONS]
    },
    resetNeeds (payload) {
      this.profiles[this.profileIndex].needs = [...NEEDS]
    },
    resetProfiles (payload) {
      this.profileIndex = 0

      this.profiles = [{
        ...PROFILE,
        emotions: [...EMOTIONS],
        needs: [...NEEDS],
        actions: [...ACTIONS]
      }]
    },
    setActions (payload) {
      this.profiles[this.profileIndex].actions = payload.actions
    },
    setEmotions (payload) {
      this.profiles[this.profileIndex].emotions = payload.emotions
    },
    setNeeds (payload) {
      this.profiles[this.profileIndex].needs = payload.needs
    },
    setProfileIndex (payload) {
      this.profileIndex = payload.profileIndex
    },
    updateAction (payload) {
      // Vue wraps splice() for reactivity
      this.profiles[this.profileIndex].actions.splice(payload.index, 1, payload.action.trim())
    },
    updateEmotion (payload) {
      // Vue wraps splice() for reactivity
      this.profiles[this.profileIndex].emotions.splice(payload.index, 1, payload.emotion)
    },
    updateNeed (payload) {
      // Vue wraps splice() for reactivity
      this.profiles[this.profileIndex].needs.splice(payload.index, 1, payload.need.trim())
    },
    updateProfile (payload) {
      const profile = this.profiles[payload.index]

      const newProfile = {
        name: payload.profile.trim(),
        emotions: [...profile.emotions],
        needs: [...profile.needs],
        actions: [...profile.actions]
      }

      // Vue wraps splice() for reactivity
      this.profiles.splice(payload.index, 1, newProfile)
    }
  }
})
