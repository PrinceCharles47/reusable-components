<template>
  <v-container>
    <v-card flat class="px-0" id="container-card">
      <v-card-subtitle
        class="text-subtitle-1 font-weight-bold py-2"
        :style="`color: ${color.primary};`"
        >Basic Information</v-card-subtitle
      >
      <v-divider class="mb-2"></v-divider>
      <v-row dense>
        <v-col class="pt-2" cols="12" md="6" v-for="(num, i) in 5" :key="i">
          <v-card-text class="py-0">
            <p class="text-subtitle-2 font-weight-bold mb-0">Date of Birth:</p>
            <p class="text-subtitle-2 font-weight-regular mb-0">July 6, 2001</p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "InformationCard",
  data: () => ({
    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },
  }),
};
</script>

<style scoped>
#container-card {
  border-top: 3px solid #7b40f9;
  border-radius: 0;
}
</style>
