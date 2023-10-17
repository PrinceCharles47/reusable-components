<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
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

      <v-col cols="12" md="4">
        <v-card outlined class="pa-0 pb-6">
          <v-card-text class="text-center">
            <v-card-title class="d-flex justify-center" :style="`color: ${color.secondary};`"
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

      <v-col cols="12" md="4">
        <v-card outlined>
          <v-card-title>Card</v-card-title>
          <v-card-text>
            <div v-for="(num, i) in 5" :key="i" @click="test(num)">
              <v-divider></v-divider>
              <p class="text-body-1 mb-0 mt-3">Lorem ipsum dolor sit, amet consectetur</p>
              <p class="text-subtitle-2">Lorem ipsum dolor sit</p>
            </div>
          </v-card-text>
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
    test: function(num){
      alert(num)
    }
  }
};
</script>

<style scoped>
/* * {
      border: 1px solid whitesmoke;
    } */

/* #form-title {
  border-bottom: 2px solid #a981ff;
} */
</style>
