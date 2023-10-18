<template>
  <div>
    <v-row>
      <v-col cols="12" md="3">
        <v-card flat>
          <v-card-title>Card Title</v-card-title>
          <v-card-subtitle>Card Subtitle</v-card-subtitle>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              magni sunt vitae, at aspernatur quibusdam aperiam esse velit nisi
              quis voluptate voluptatibus perferendis tenetur repudiandae dolor
              eius voluptatem. Impedit, reiciendis.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn> Button </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- <v-col cols="12" md="4">
        <v-card flat>
          <v-card-title>Card Title</v-card-title>
          <v-card-subtitle>Card Subtitle</v-card-subtitle>

          <v-card-text>
            <v-list>
              <v-list-item class="px-0" v-for="(num, i) in 5" :key="i">
                <v-list-item-content class="py-0">
                  <p class="text-body-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>

          <v-card-actions>
            <v-btn> Button </v-btn>
          </v-card-actions>
        </v-card>
      </v-col> -->

      <v-col cols="12" md="3">
        <v-card outlined class="pa-0 pb-6">
          <v-card-text class="text-center">
            <v-card-title
              class="d-flex justify-center"
              :style="`color: ${color.secondary};`"
              >LOG IN</v-card-title
            >
          </v-card-text>

          <v-divider></v-divider>

          <v-form ref="form" class="px-4 py-8">
            <p class="mb-0 text-subtitle-2">Username</p>
            <v-text-field outlined dense></v-text-field>

            <p class="mb-0 text-subtitle-2">Password</p>
            <v-text-field outlined dense type="password"></v-text-field>
          </v-form>

          <div class="px-4">
            <v-btn :color="color.primary" block class="white--text mb-2"
              >Log In
            </v-btn>

            <v-btn :color="color.primary" outlined block>Sign Up </v-btn>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card outlined class="pb-4">
          <v-card-title>Card</v-card-title>
          <v-card flat v-for="(num, i) in 5" :key="i" @click="test(num)" class="mx-4 pb-4">
            <v-divider></v-divider>
            <p class="text-overline mb-0 mt-4">July 6</p>
            <p class="text-body-1 mb-0">Lorem ipsum dolor sit, amet consectetur</p>
          </v-card>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card outlined class="pb-4">
          <v-card-title>Card</v-card-title>
          <v-card
            v-for="(num, i) in 5"
            :key="i"
            @click="test(num)"
            class="d-flex py-3 px-4 align-center"
            flat
          >
            <v-card flat class="d-flex flex-column align-center">
              <v-card-title class="pa-0 mb-4 text-subtitle-1">10</v-card-title>
              <v-card-subtitle class="py-0 px-2 text-caption"
                >February</v-card-subtitle
              >
            </v-card>
            <v-divider vertical class="mx-4"></v-divider>
            <div>
              <!-- <v-divider></v-divider> -->
              <p class="text-body-2 mb-0">
                Lorem ipsum dolor sit, amet consectetur
              </p>
              <p class="text-caption mb-0">Lorem ipsum dolor sit</p>
            </div>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },
  }),

  methods: {
    test: function (num) {
      alert(num);
    },
  },
};
</script>

<style scoped>
/* #form-title {
  border-bottom: 2px solid #a981ff;
} */
</style>
