export default {
  namespaced: true,
  state () {
    return {
      schema: '1.0.0',
      version: null
    }
  },
  mutations: {
    setSchema: function (state, payload) {
      state.schema = payload.schema
    },
    setVersion: function (state, payload) {
      state.version = payload.version
    }
  },
  actions: {
    setSchema: function (context, payload) {
      context.commit('setSchema', payload)
    },
    setVersion: function (context, payload) {
      context.commit('setVersion', payload)
    }
  }
}
