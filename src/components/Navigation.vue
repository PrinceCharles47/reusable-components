<template>
  <div>
    <v-app-bar app dense flat :color="navColor">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        :color="accentColor"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="font-weight-light pl-0">
        <span class="font-weight-light">Medi</span>
        <span class="font-weight-bold title">Book</span>
      </v-app-bar-title>
      <!-- <v-spacer></v-spacer>
      <v-img src="../assets/eclipse.png" contain max-height="35" max-width="35"></v-img> -->
    </v-app-bar>

    <!-- Contains navigation buttons inside the drawer -->
    <v-navigation-drawer app v-model="drawer" :color="navColor">
      <v-list-item class="pa-0">
        <!-- <v-list-item-icon class="mr-2">
          <v-img src="../assets/eclipse.png" width="50"></v-img>
        </v-list-item-icon> -->
        <v-list-item-content :style="`background-color: ${subAccentColor};`">
          <v-list-item-title class="font-weight-light text-h6 py-6 mx-4">
            <span class="white--text">Medi</span>
            <span class="font-weight-bold white--text">Book</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Loop through the navButtons and create a button on each loop -->
      <v-list class="mt-4" nav dense subheader>
        <v-divider></v-divider>
        <v-subheader class="text-caption">Subheader</v-subheader>

        <v-list-item
          v-for="(item, index) in navButtons1"
          :key="index"
          exact-path
          exact-active-class="active-nav"
          :to="{ name: item.route }"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.name.toUpperCase() }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon
              :color="currentRoute === item.route ? 'white' : subAccentColor"
              >{{ item.icon }}</v-icon
            >
          </v-list-item-icon>
        </v-list-item>
      </v-list>

      <!-- Extra navigation buttons -->
      <v-list class="mt-4" nav dense subheader>
        <v-divider></v-divider>
        <v-subheader class="text-caption">Subheader</v-subheader>

        <v-list-item
          v-for="(item, index) in navButtons2"
          :key="index"
          exact-path
          exact-active-class="active-nav"
          :to="{ name: item.route }"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.name.toUpperCase() }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon
              :color="currentRoute === item.route ? 'white' : subAccentColor"
              >{{ item.icon }}</v-icon
            >
          </v-list-item-icon>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-divider></v-divider>
        <div class="pa-4">
          <v-btn outlined block color="red">
            <v-icon color="red" class="mr-2">mdi-logout</v-icon>
            Log out
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Navigation",

  data: () => ({
    currentUser: null,
    drawer: false,
    navColor: "#FFFFFF",
    accentColor: "#7B40F9",
    subAccentColor: "#A981FF",
    navButtons1: [
      {
        name: "Table",
        route: "table",
        icon: "mdi-table-large",
      },
      {
        name: "Charts",
        route: "chart",
        icon: "mdi-chart-areaspline-variant",
      },
      {
        name: "Multistep Form",
        route: "multistep-form",
        icon: "mdi-list-box",
      },
    ],

    navButtons2: [
      // {
      //   name: "Settings",
      //   route: "chart",
      //   icon: "mdi-cog",
      // },
      // {
      //   name: "Messages",
      //   route: "chart",
      //   icon: "mdi-mail",
      // },
    ],
  }),

  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
/* * {
  border: 1px solid gray;
} */

.active-nav {
  background-color: #a981ff;
  color: white;
  border-radius: 5px;
  /* border-left: 2px solid #a981ff; */
}
.title {
  color: #7b40f9;
}
</style>
