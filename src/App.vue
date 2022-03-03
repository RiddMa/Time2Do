<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn v-on:click="toggleColorScheme">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    toggleColorScheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    setColorScheme(scheme) {
      switch (scheme) {
        case "dark":
          this.$vuetify.theme.dark = true;
          break;
        case "light":
          this.$vuetify.theme.dark = false;
          break;
        default:
          this.$vuetify.theme.dark = false;
          break;
      }
    },
    getPreferredColorScheme() {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      } else {
        return "light";
      }
    },
  },
  mounted() {
    if (this.getPreferredColorScheme() === "dark") {
      this.$vuetify.theme.dark = true;
    }
  },
};
</script>
