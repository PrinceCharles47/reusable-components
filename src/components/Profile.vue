<template>
  <v-container>
    <v-card flat id="header-title" class="pa-4 mb-6 d-flex flex-column flex-md-row justify-md-space-between align-md-center">
      <div>
        <v-card-title class="pt-2 px-0 white--text">Clemente, Prince Charles M.</v-card-title>
        <v-card-subtitle class="pb-2 px-0 white--text">Something Goes Here</v-card-subtitle>
      </div>
      <v-card-actions class="pl-0">
        <v-btn small outlined elevation="0" class="px-4 white--text">Edit <v-icon small class="ml-2">mdi-pencil</v-icon></v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mb-6 card-info" flat v-for="(information, i) in informationArr" :key="i">
      <div class="d-flex">
        <p class="data-title px-4 mr-auto py-1 mb-0 text-subtitle-2 white--text font-weight-bold">{{ information.title.toUpperCase() }}</p>
      </div>
      <v-divider class="divider"></v-divider>

      <v-row class="mx-4 mt-6 pb-3">
        <v-col cols="12" md="4" v-for="(data, i) in information.data" :key="i" class="pa-0">
          <p class="text-body-2 mb-3"><span class="font-weight-bold mr-2">{{data.label}}:</span> {{ data.value }}</p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    informationArr: [
      {
        title: "Basic information",
        data: [
          {
            label: "Date of birth",
            value: "July 6, 2001"
          },
          {
            label: "Age",
            value: "22 years old"
          },
          {
            label: "Gender",
            value: "Male"
          },
          {
            label: "Mobile number",
            value: "09058112553"
          },
          {
            label: "Email",
            value: "clemente@gmail.com"
          }
        ]
      },
      {
        title: "Personal information",
        data: [
          {
            label: "Address",
            value: "123 Purok 1, Brgy. Pakul, Jaen, Nueva Ecija 3109"
          },
          {
            label: "Mother's name",
            value: "Fortunata Miranda"
          },
          {
            label: "Father's name",
            value: "Benjamin Clemente"
          }
        ]
      }
    ],
    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },
  }),
};
</script>

<style scoped>
#header-title{
  background-color: #A981FF;
}

.data-title{
  background-color: #A981FF;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.divider{
  background-color: #A981FF;
}

.card-info{
  background-color: transparent;
}
</style>
