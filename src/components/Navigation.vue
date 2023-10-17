<template>
  <div>
    <v-app-bar app dense flat>
      <v-app-bar-nav-icon
        @click="navDrawer = !navDrawer"
        :color="accentColor"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="font-weight-light pl-0">
        <span class="font-weight-light">Medi</span>
        <span class="font-weight-bold title" :style="`color: ${accentColor};`"
          >Book</span
        >
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

      <v-btn icon @click="changeTheme">
        <v-icon :color="accentColor">mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Contains navigation buttons inside the drawer -->
    <v-navigation-drawer app v-model="navDrawer">
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

      <!-- Loops through the navButtons and create a button on each loop -->
      <v-list class="mt-6" nav dense subheader>
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

        <v-list-item class="pr-0">
          <v-list-item-title>DARK MODE</v-list-item-title>
          <v-switch v-model="darkMode" inset :color="subAccentColor"></v-switch>
        </v-list-item>

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
    darkMode: true,
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
        name: "Form",
        route: "form",
        icon: "mdi-list-box",
      },
      {
        name: "Multistep Form",
        route: "multistep-form",
        icon: "mdi-format-line-weight",
      },
      {
        name: "Tabs",
        route: "tab",
        icon: "mdi-tab",
      },
      {
        name: "Cards",
        route: "card",
        icon: "mdi-card-text",
      },
      {
        name: "User Profile",
        route: "profile",
        icon: "mdi-account",
      },
      {
        name: "Calendar",
        route: "calendar",
        icon: "mdi-calendar-month",
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

  methods: {
    changeTheme: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },

  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },

  mounted() {
    this.$vuetify.theme.dark = this.darkMode;
  },

  watch: {
    darkMode: {
      handler(newVal, oldVal){
        this.$vuetify.theme.dark = newVal
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.active-nav {
  background-color: #a981ff;
  color: white;
  border-radius: 5px;
}
/* .title {
  color: #7b40f9;
}  */
</style>
