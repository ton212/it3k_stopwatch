import Vue from 'vue'
import Vuex from 'vuex'
import createMutationsSharer from 'vuex-shared-mutations'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  showSplashScreen: false,
  showBlackScreen: false,
  appTopMargin: 100,
  stopwatchTitle: 'ทดสอบ',
  stopwatchTitleDisplay: true,
  timeDisplayFontSize: 100,
  timeDisplayWidth: 180,
  timeSeperatorOffset: -10,
  stopwatchActivated: false,
  stopwatchResetRequest: false,
  newLapSaveRequest: false,
  laps: [],
  lapInfoDisplayScale: 100
}

const mutations = {
  toggleBlackScreen (state) {
    state.showBlackScreen = !state.showBlackScreen
  },
  toggleSplashScreen (state) {
    state.showSplashScreen = !state.showSplashScreen
  },
  setAppTopMargin (state, margin) {
    state.appTopMargin = margin
  },
  setStopwatchTitle (state, text) {
    state.stopwatchTitle = text
  },
  toggleStopwatchTitle (state) {
    state.stopwatchTitleDisplay = !state.stopwatchTitleDisplay
  },
  setTimeDisplayFontSize (state, size) {
    state.timeDisplayFontSize = size
  },
  setTimeDisplayWidth (state, width) {
    state.timeDisplayWidth = width
  },
  setTimeSeperatorOffset (state, offset) {
    state.timeSeperatorOffset = offset
  },
  toggleStopwatch (state) {
    state.stopwatchActivated = !state.stopwatchActivated
  },
  resetStopwatch (state, status) {
    state.stopwatchResetRequest = status
  },
  requestLapSave (state, status) {
    state.newLapSaveRequest = status
  },
  saveNewLap (state, payload) {
    if (state.laps.length != 3) {
      state.laps.push({
        title: payload.title,
        time: payload.time
      })
    }
  },
  clearLaps (state) {
    state.laps = []
  },
  setLapInfoDisplayScale (state, scale) {
    state.lapInfoDisplayScale = scale
  }
}

const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  plugins: [
    createPersistedState(),
    createMutationsSharer({ predicate: [
      'setAppTopMargin', 'toggleSplashScreen', 'toggleBlackScreen',
      'setStopwatchTitle', 'toggleStopwatchTitle', 'setTimeDisplayFontSize', 'setTimeSeperatorOffset', 'setTimeDisplayWidth',
      'toggleStopwatch', 'resetStopwatch',
      'requestLapSave', 'saveNewLap', 'clearLaps', 'setLapInfoDisplayScale'
      ] })
  ]
})