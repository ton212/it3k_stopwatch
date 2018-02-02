<template>
  <div class="controller">
    <label>App Top Margin</label>
    <input type="number" v-model="appTopMargin">
    <br><br>
    <label>Time Display Font Size</label>
    <input type="number" v-model="timeDisplayFontSize">
    <br><br>
    <label>Time Display Width</label>
    <input type="number" v-model="timeDisplayWidth">
    <br><br>
    <label>Time Seperator Size</label>
    <input type="number" v-model="timeSeperatorOffset">
    <br><br>
    <label>Lap Info Scales</label>
    <input type="number" v-model="lapInfoDisplayScale">
    <br><br><br>
    <label>Title</label>
    <input type="text" v-model="stopwatchTitle" style="width:200px" :disabled="$store.state.stopwatchTitleDisplay">
    <button :disabled="$store.state.stopwatchTitleDisplay" @click="$store.commit('toggleStopwatchTitle')">Show</button>
    <button :disabled="!$store.state.stopwatchTitleDisplay" @click="$store.commit('toggleStopwatchTitle')">Hide</button>
    
    <br><br><hr><br>

    <button :disabled="$store.state.stopwatchActivated" @click="$store.commit('toggleStopwatch')">Start</button>
    <button :disabled="!$store.state.stopwatchActivated" @click="$store.commit('toggleStopwatch')">Stop</button>
    <button @click="$store.commit('resetStopwatch', true)">Reset</button>

    <button @click="$store.commit('requestLapSave', true)">Save Lap</button>
    <button @click="$store.commit('clearLaps', true)">CLEAR LAPS</button>

    <br><br><hr><br>

    <button :disabled="$store.state.showSplashScreen" @click="$store.commit('toggleSplashScreen')">Show Splash Screen</button>
    <button :disabled="!$store.state.showSplashScreen" @click="$store.commit('toggleSplashScreen')">Hide Splash Screen</button>

    <br><br><hr><br>

    <pre>{{ $store.state.laps | pretty }}</pre>
  </div>
</template>

<script>
import Stopwatch from './Stopwatch'

export default {
  components: { Stopwatch },
  computed: {
    timeDisplayFontSize: {
      get () {
        return this.$store.state.timeDisplayFontSize
      },
      set (size) {
        return this.$store.commit('setTimeDisplayFontSize', size)
      }
    },
    timeDisplayWidth: {
      get () {
        return this.$store.state.timeDisplayWidth
      },
      set (Width) {
        return this.$store.commit('setTimeDisplayWidth', Width)
      }
    },
    timeSeperatorOffset: {
      get () {
        return this.$store.state.timeSeperatorOffset
      },
      set (size) {
        return this.$store.commit('setTimeSeperatorOffset', size)
      }
    },
    stopwatchTitle: {
      get () {
        return this.$store.state.stopwatchTitle
      },
      set (text) {
        return this.$store.commit('setStopwatchTitle', text)
      }
    },
    lapInfoDisplayScale: {
      get () {
        return this.$store.state.lapInfoDisplayScale
      },
      set (scale) {
        return this.$store.commit('setLapInfoDisplayScale', scale)
      }
    },
    appTopMargin: {
      get () {
        return this.$store.state.appTopMargin
      },
      set (margin) {
        this.$store.commit('setAppTopMargin', margin)
      } 
    }
  },
  filters: {
    pretty: function(value) {
      return JSON.stringify(value, null, 2);
    }
  }
}
</script>

<style>
body {
  background: #fff;
  color: #000;
  padding: 30px;
}
</style>
