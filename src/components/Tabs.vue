<template>
  <v-card flat class="px-0">
    <v-tabs :color="color.primary" :slider-color="color.primary" show-arrows v-model="tab">
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat>
            <v-card-text
              >{{ item.content }} Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Deleniti consectetur possimus exercitationem magni
              molestias debitis sequi dicta quod in, distinctio minus minima,
              molestiae voluptatem. Et saepe earum magnam magni
              adipisci!</v-card-text
            >
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>

    <!-- <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text
            >{{ item.content }} Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Deleniti consectetur possimus exercitationem magni
            molestias debitis sequi dicta quod in, distinctio minus minima,
            molestiae voluptatem. Et saepe earum magnam magni
            adipisci!</v-card-text
          >
        </v-card>
      </v-tab-item>
    </v-tabs-items> -->
  </v-card>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    tab: null,
    items: [
      { tab: "One", content: "Tab 1 Content" },
      { tab: "Two", content: "Tab 2 Content" },
      { tab: "Three", content: "Tab 3 Content" },
      { tab: "Four", content: "Tab 4 Content" },
      { tab: "Five", content: "Tab 5 Content" },
      { tab: "Six", content: "Tab 6 Content" },
      { tab: "Seven", content: "Tab 7 Content" },
      { tab: "Eight", content: "Tab 8 Content" },
      { tab: "Nine", content: "Tab 9 Content" },
      { tab: "Ten", content: "Tab 10 Content" },
    ],

    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },
  }),
};
</script>

<style scoped>
/* * {
      border: 1px solid gray;
    } */
</style>
