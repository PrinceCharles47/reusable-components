import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const headers = {
  "X-RapidAPI-Key": "1edcaed7d6mshed3833e2798a6b9p14f9d9jsn499aea9e5675",
  "X-RapidAPI-Host": "food-nutrional-data.p.rapidapi.com",
};

Vue.use(Vuex);

export const FoodNutritionalData = {
  namespaced: true,
  state: () => ({
    food_nutritional_value: null,
  }),
  getters: {
    getNutritionalValue: (state) => state.food_nutritional_value,
  },
  mutations: {
    SET_FOOD_NUTRITIONAL_VALUE(state, data) {
        state.food_nutritional_value = data;
    }
  },
  actions: {
    async fetchFoodNutritionalValue({ commit }, nutrientQuery) {
      const url = `https://food-nutrional-data.p.rapidapi.com/${nutrientQuery}`;
      return axios
        .get(url, {
          headers: headers,
        })
        .then((response) => {
          const data = response.data;
          commit("SET_FOOD_NUTRITIONAL_VALUE", data);
        })
        .catch((error) => {
          console.error("Error Fetching Nutritional Value", error);
        });
    },
  },
};
