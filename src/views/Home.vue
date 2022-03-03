<template>
  <v-row no-gutters class="my-8">
    <v-col>
      <v-card> </v-card>
    </v-col>
    <v-col>
      <v-card>
        <counter></counter>
      </v-card>
    </v-col>
    <v-col>
      <v-card> </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Counter from "@/components/Counter";

export default {
  name: "Home",

  components: {
    Counter,
  },
};
</script>
