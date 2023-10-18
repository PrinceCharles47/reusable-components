<template>
  <v-container class="pa-0">
    <v-card flat id="card-container">
      <!-- <v-card-title
        class="white--text darken-4"
        :style="`background-color: ${color.primary};`"
      >
        Notifications

        <v-spacer></v-spacer>

        <v-btn color="white" class="text--primary" fab small>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider> -->

      <v-virtual-scroll
        bench="4"
        :items="items"
        :item-height="125"
        style="height: 85vh"
      >
        <template v-slot:default="{ item }">
          <!-- <v-list-item>
            <v-list-item-avatar>
              <v-avatar :color="item.color" size="56" class="white--text">
                {{ item.initials }}
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-body-2 font-weight-bold" style="color: #363636;">{{ item.fullName }}</v-list-item-title>
              <v-list-item-subtitle class="text-caption">{{ item.fullName }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider> -->

          <v-card
            v-for="(num, i) in 5"
            :key="i"
            class="d-flex pa-4"
            flat
          >
            <v-card outlined class="d-flex flex-column align-center mr-4">
              <v-card-title>10</v-card-title>
              <v-card-subtitle>February</v-card-subtitle>
            </v-card>
            <div>
              <v-divider></v-divider>
              <p class="text-body-1 mb-0 mt-3">
                Lorem ipsum dolor sit, amet consectetur
              </p>
              <p class="text-subtitle-2">Lorem ipsum dolor sit</p>
            </div>
          </v-card>
        </template>
      </v-virtual-scroll>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Notification",

  data: () => ({
    colors: [
      "#2196F3",
      "#90CAF9",
      "#64B5F6",
      "#42A5F5",
      "#1E88E5",
      "#1976D2",
      "#1565C0",
      "#0D47A1",
      "#82B1FF",
      "#448AFF",
      "#2979FF",
      "#2962FF",
    ],
    names: [
      "Oliver",
      "Jake",
      "Noah",
      "James",
      "Jack",
      "Connor",
      "Liam",
      "John",
      "Harry",
      "Callum",
      "Mason",
      "Robert",
      "Jacob",
      "Jacob",
      "Jacob",
      "Michael",
      "Charlie",
      "Kyle",
      "William",
      "William",
      "Thomas",
      "Joe",
      "Ethan",
      "David",
      "George",
      "Reece",
      "Michael",
      "Richard",
      "Oscar",
      "Rhys",
      "Alexander",
      "Joseph",
      "James",
      "Charlie",
      "James",
      "Charles",
      "William",
      "Damian",
      "Daniel",
      "Thomas",
      "Amelia",
      "Margaret",
      "Emma",
      "Mary",
      "Olivia",
      "Samantha",
      "Olivia",
      "Patricia",
      "Isla",
      "Bethany",
    ],
    surnames: [
      "Smith",
      "Anderson",
      "Clark",
      "Wright",
      "Mitchell",
      "Johnson",
      "Thomas",
      "Rodriguez",
      "Lopez",
      "Perez",
      "Williams",
      "Jackson",
      "Lewis",
      "Hill",
      "Roberts",
      "Jones",
      "White",
      "Lee",
      "Scott",
      "Turner",
      "Brown",
      "Harris",
      "Walker",
      "Green",
      "Phillips",
      "Davis",
      "Martin",
      "Hall",
      "Adams",
      "Campbell",
      "Miller",
      "Thompson",
      "Allen",
      "Baker",
      "Parker",
      "Wilson",
      "Garcia",
      "Young",
      "Gonzalez",
      "Evans",
      "Moore",
      "Martinez",
      "Hernandez",
      "Nelson",
      "Edwards",
      "Taylor",
      "Robinson",
      "King",
      "Carter",
      "Collins",
    ],
    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },
  }),

  computed: {
    items() {
      const namesLength = this.names.length;
      const surnamesLength = this.surnames.length;
      const colorsLength = this.colors.length;

      return Array.from({ length: 10000 }, (k, v) => {
        const name = this.names[this.genRandomIndex(namesLength)];
        const surname = this.surnames[this.genRandomIndex(surnamesLength)];

        return {
          color: this.colors[this.genRandomIndex(colorsLength)],
          fullName: `${name} ${surname}`,
          initials: `${name[0]} ${surname[0]}`,
        };
      });
    },
  },

  methods: {
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },
  },
};
</script>

<style scoped>
#card-container {
  border-radius: 0px;
}
</style>
