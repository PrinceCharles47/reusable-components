<template>
  <v-container>
    <v-card
      flat
      class="pt-4 pl-4 mb-2"
      :style="`background-color: ${color.primary};`"
    >
      <v-img
        :src="require('../assets/cath_avatar.jpg')"
        max-width="100"
        max-height="100"
        :style="`border-radius: 5px; border: 2px solid white;`"
      ></v-img>
      <v-card-title class="pl-0 white--text">Cathlyn Mae Lapid</v-card-title>

      <!-- <v-divider color="white"></v-divider>

      <v-card-subtitle class="text-subtitle-1 font-weight-bold pl-0"
        >Basic Information</v-card-subtitle
      >
      <v-card-text class="py-0 pl-0">
        <p class="text-subtitle-2 font-weight-bold mb-0">Date of Birth:</p>
        <p class="text-subtitle-1">July 6, 2001</p>
      </v-card-text>

      <v-card-text class="py-0 pl-0">
        <p class="text-subtitle-2 font-weight-bold mb-0">Age:</p>
        <p class="text-subtitle-1">22 years old</p>
      </v-card-text>

      <v-card-text class="py-0 pl-0">
        <p class="text-subtitle-2 font-weight-bold mb-0">Gender:</p>
        <p class="text-subtitle-1">Female</p>
      </v-card-text>

      <v-card-text class="py-0 pl-0">
        <p class="text-subtitle-2 font-weight-bold mb-0">Mobile Number:</p>
        <p class="text-subtitle-1">09058112554</p>
      </v-card-text>

      <v-card-text class="py-0 pl-0">
        <p class="text-subtitle-2 font-weight-bold mb-0">Email:</p>
        <p class="text-subtitle-1">cathlynmae@gmail.com</p>
      </v-card-text>

      <v-card-text class="py-0 pl-0">
        <p class="text-subtitle-2 font-weight-bold mb-0">Address:</p>
        <p class="text-subtitle-1">
          71 Purok 1, Brgy. Sta. Rita, Concepcion, Tarlac
        </p>
      </v-card-text> -->
    </v-card>




    

    <v-card flat class="px-0 pb-4" outlined>
      <v-card-subtitle
        class="text-subtitle-1 font-weight-bold py-2"
        :style="`color: ${color.primary};`"
        >Basic Information</v-card-subtitle
      >
      <v-divider class="mb-2"></v-divider>
      <v-row dense>
        <!-- <v-col class="pt-2" cols="12" v-for="(num, i) in 5" :key="i">
          <v-card-text class="py-0">
            <p class="text-subtitle-2 font-weight-bold mb-0">Date of Birth:</p>
            <p class="text-subtitle-2 font-weight-regular mb-0">July 6, 2001</p>
          </v-card-text>
        </v-col> -->
        <v-col cols="12">
          <v-card-text class="py-0">
            <p class="text-subtitle-2 font-weight-bold mb-0">Date of Birth:</p>
            <p class="text-subtitle-1">July 6, 2001</p>
          </v-card-text>
        </v-col>

        <v-col cols="12">
          <v-card-text class="py-0">
            <p class="text-subtitle-2 font-weight-bold mb-0">Age:</p>
            <p class="text-subtitle-1">22 years old</p>
          </v-card-text>
        </v-col>

        <v-col cols="12">
          <v-card-text class="py-0">
            <p class="text-subtitle-2 font-weight-bold mb-0">Gender:</p>
            <p class="text-subtitle-1">Female</p>
          </v-card-text>
        </v-col>

        <v-col cols="12">
          <v-card-text class="py-0">
            <p class="text-subtitle-2 font-weight-bold mb-0">Mobile Number:</p>
            <p class="text-subtitle-1">09058112554</p>
          </v-card-text>
        </v-col>

        <v-col cols="12">
          <v-card-text class="py-0">
            <p class="text-subtitle-2 font-weight-bold mb-0">Email:</p>
            <p class="text-subtitle-1">cathlynmae@gmail.com</p>
          </v-card-text>
        </v-col>

        <v-col cols="12">
          <v-card-text class="py-0">
            <p class="text-subtitle-2 font-weight-bold mb-0">Address:</p>
            <p class="text-subtitle-1">
              71 Purok 1, Brgy. Sta. Rita, Concepcion, Tarlac
            </p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <!-- <v-card
      flat
      class="pa-4 d-flex align-center"
      outlined
      :style="`background-color: ${color.primary};`"
    >
      <v-img
        :src="require('../assets/cath_avatar.jpg')"
        max-width="90"
        max-height="90"
        :style="`border-radius: 5px; border: 2px solid white`"
      ></v-img>

      <div class="ml-4">
        <v-card-title class="text-h5 white--text pt-0 pl-0 pb-2">Cathlyn Mae Lapid</v-card-title>
        <v-btn small outlined class="white--text px-2">
            Edit
            <v-icon color="white" class="ml-2" small>mdi-pencil</v-icon>
        </v-btn>
      </div>
    </v-card> -->
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },
  }),
};
</script>

<style scoped></style>
