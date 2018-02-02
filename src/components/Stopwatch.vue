<template>
  <div v-bind:style="{ paddingTop: $store.state.appTopMargin + 'px' }">

    <div class="stopwatch" v-bind:style="{ opacity: $store.state.showSplashScreen ? 0 : 1 }">
        <div class="title">
        <h1 v-bind:style="titleCss">{{ $store.state.stopwatchTitle }}</h1>
      </div>

      <div class="time-display">
        <div class="group" v-bind:style="timeDisplayCss">
          {{ minutes.toString() | leftPad(2, '0') }}
        </div>
        <div class="seperator" v-bind:style="[timeDisplayCss, timeSeperatorCss]">:</div>
        <div class="group" v-bind:style="timeDisplayCss">
          {{ seconds.toString() | leftPad(2, '0') }}
        </div>
        <div class="seperator" v-bind:style="[timeDisplayCss, timeSeperatorCss]">:</div>
        <div class="group" v-bind:style="timeDisplayCss">
          {{ milliseconds.toString() | leftPad(2, '0') }}
        </div>
      </div>

      <div class="laps">
        <div class="lap" v-for="lap in $store.state.laps">
          <div class="lap-title" v-bind:style="lapInfoCss.title">{{ lap.title }}</div>
          <div class="lap-time" v-bind:style="lapInfoCss.time">{{ lap.time }}</div>
        </div>
      </div>
    </div>

    <div class="logo-splash" v-bind:style="{ top: $store.state.appTopMargin - 10 + 'px', opacity: $store.state.showSplashScreen ? 1 : 0 }">
      <img src="../assets/logo.png" alt="">
    </div>
  </div>
    
</template>

<script>
export default {
  data () {
    return {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      intervel: null
    }
  },
  computed: {
    titleCss () {
      return {
        opacity: this.$store.state.stopwatchTitleDisplay ? 1 : 0,
        fontSize: this.$store.state.timeDisplayFontSize/2 + 'px',
        minHeight: this.$store.state.timeDisplayFontSize/2 + 'px',
        lineHeight: this.$store.state.timeDisplayFontSize/2 + 'px'
      }
    },
    timeDisplayCss () {
      return {
        fontSize: this.$store.state.timeDisplayFontSize + 'px',
        width: this.$store.state.timeDisplayWidth + 'px'
      }
    },
    timeSeperatorCss () {
      return {
        top: this.$store.state.timeSeperatorOffset + 'px'
      }
    },
    lapInfoCss () {
      return {
        title: {
          fontSize: this.$store.state.lapInfoDisplayScale - 50 + 'px'
        },
        time: {
          fontSize: this.$store.state.lapInfoDisplayScale - 20 + 'px'
        }
      }
    },
    stopwatchActivated () {
      return this.$store.state.stopwatchActivated
    },
    stopwatchResetRequest () {
      return this.$store.state.stopwatchResetRequest
    },
    newLapSaveRequest () {
      return this.$store.state.newLapSaveRequest
    }
  },
  watch : {
    stopwatchActivated (newStatus) {
      newStatus ? this.start() : this.stop()
    },
    stopwatchResetRequest (request) {
      request ? this.reset() : null
    },
    newLapSaveRequest (request) {
      request ? this.saveLap() : null
    }
  },
  methods: {
    start () {
      clearInterval(this.intervel)
      this.intervel = setInterval(this.startTimer, 10)
    },
    stop () {
      clearInterval(this.intervel)
    },
    reset () {
      this.milliseconds = 0
      this.seconds = 0
      this.minutes = 0

      this.$store.commit('resetStopwatch', false)
    },
    startTimer () {
      this.milliseconds++;

      if (this.milliseconds > 99) {
        this.seconds++
        this.milliseconds = 0
      }

      if (this.seconds == 60) {
        this.minutes++
        this.seconds = 0
      }
    },
    saveLap () {
      if (this.stopwatchActivated) {
        this.$store.commit('toggleStopwatch')
      }

      const lap = {
        title: this.$store.state.stopwatchTitle,
        time: this.$options.filters.leftPad(this.minutes.toString(), 2, '0') + ':' + this.$options.filters.leftPad(this.seconds.toString(), 2, '0') + ':' + this.$options.filters.leftPad(this.milliseconds.toString(), 2, '0')
      }

      this.$store.commit('saveNewLap', lap)
      this.$store.commit('requestLapSave', false)
    }
  }
}
</script>

<style scoped>
.stopwatch {
  transition: all 0.5s;
}

.title h1 {
  transition: all 0.7s;
  font-family: "Sukhumvit Set", sans-serif;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0;
}

.time-display {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 100px;
  text-align: center;
  margin-bottom: 30px;
}

.group {
  display: inline-block;
  width: 200px;
  overflow: hidden;
}

.seperator {
  display: inline-block;
  position: relative;
  width: auto !important;
}

.laps {
  width: 100%;
  text-align: center;
}

.lap {
  width: 30%;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  display: inline-block;
  margin-right: 20px;
  padding: 20px 0;
}

.lap-title {
  font-family: "Sukhumvit Set", sans-serif;
  font-weight: 600;
}

.lap-time {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}

.logo-splash {
  position: absolute;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  transition: all 0.5s;
}
</style>
