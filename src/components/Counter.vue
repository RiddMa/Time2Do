<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <v-btn v-if="!isTicking && !startTime" v-on:click="startCounter">
          启动
        </v-btn>
        <v-btn v-if="isTicking" v-on:click="pauseCounter">暂停</v-btn>
        <v-btn v-if="!isTicking && startTime" v-on:click="resumeCounter">
          继续
        </v-btn>
        <v-btn v-if="!isTicking && startTime" v-on:click="stopCounter">
          清除
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        {{ startTime }}
        <br /><br />
        <h1>{{ elapsedTime }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { formatDuration } from "@/utils/util";
export default {
  name: "counter",
  data: () => ({
    interval: null,
    isTicking: false,
  }),
  computed: {
    ...mapState({
      startTime: (state) => state.startTime,
      elapsedTime: (state) => formatDuration(state.elapsedTime),
      // elapsedTime: (state) => formatDuration(state.elapsedTime),
    }),
  },
  methods: {
    startCounter() {
      this.isTicking = true;
      this.$store.dispatch("startCounter");
      this.interval = setInterval(this.tickCounter, 1000);
    },
    tickCounter() {
      this.$store.dispatch("tickCounter");
    },
    pauseCounter() {
      try {
        this.isTicking = false;
        clearInterval(this.interval);
      } catch (e) {
        console.log(e);
      }
    },
    resumeCounter() {
      this.isTicking = true;
      this.interval = setInterval(this.tickCounter, 1000);
    },
    stopCounter() {
      try {
        this.isTicking = false;
        clearInterval(this.interval);
        this.$store.dispatch("stopCounter");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped></style>
