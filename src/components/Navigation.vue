<template>
  <div>
    <v-app-bar app dense flat :color="navColor">
      <v-app-bar-nav-icon
        @click="navDrawer = !navDrawer"
        :color="accentColor"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="font-weight-light pl-0">
        <span class="font-weight-light">Medi</span>
        <span class="font-weight-bold title">Book</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <!-- <v-img src="../assets/eclipse.png" contain max-height="35" max-width="35"></v-img> -->
      <v-btn
        icon
        @click="notificationDrawer = !notificationDrawer"
        v-if="!notificationDrawer"
      >
        <v-icon :color="accentColor">mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Contains navigation buttons inside the drawer -->
    <v-navigation-drawer
      app
      v-model="navDrawer"
      :color="navColor"
    >
      <v-list-item class="pa-0">
        <!-- <v-list-item-icon class="mr-2">
          <v-img src="../assets/eclipse.png" width="50"></v-img>
        </v-list-item-icon> -->
        <v-list-item-content :style="`background-color: ${accentColor};`">
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

    <!-- Notification drawer -->
    <v-navigation-drawer
      temporary
      width="375"
      right
      app
      class="pa-4"
      v-model="notificationDrawer"
    >
      <v-card flat>
        <v-card-title
          class="darken-4 white--text mb-4"
          :style="`background-color: ${subAccentColor}; border-radius: 5px;`"
        >
          Notifications

          <v-spacer></v-spacer>

          <v-btn
            color="white"
            class="text--primary"
            icon
            small
            @click="notificationDrawer = !notificationDrawer"
          >
            <v-icon color="white">mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
      <Notification />
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Notification from "../components/Notification.vue";

export default {
  name: "Navigation",
  components: {
    Notification,
  },

  data: () => ({
    currentUser: null,
    navDrawer: false,
    notificationDrawer: false,
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
      {
        name: "Tabs",
        route: "tab",
        icon: "mdi-tab",
      },
      {
        name: "User Profile",
        route: "profile",
        icon: "mdi-account",
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
.active-nav {
  background-color: #7b40f9;
  color: white;
  border-radius: 5px;
  /* border-left: 2px solid #a981ff; */
}
.title {
  color: #7b40f9;
}
</style>
