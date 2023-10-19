import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

//Headers for this API Use
const headers = {
  "X-RapidAPI-Key": "1edcaed7d6mshed3833e2798a6b9p14f9d9jsn499aea9e5675",
  "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
};

Vue.use(Vuex);

export const FitnessCalculator = {
  namespaced: true,
  state: () => ({
    daily_calory_requirements: null,
    bmi: null,
    body_fat_percentage: null,
    ideal_weight: null,
  }),
  getters: {
    getDailyCaloryRequirements: (state) => state.daily_calory_requirements,
    getBMI: (state) => state.bmi,
    getBodyFatPercentage: (state) => state.body_fat_percentage,
    getIdealWeight: (state) => state.ideal_weight,
  },
  mutations: {
    SET_DAILY_CALORY_REQUIREMENTS(state, data) {
      state.daily_calory_requirements = data;
    },
    SET_BMI(state, data) {
      state.bmi = data;
    },
    SET_BODY_FAT_PERCENTAGE(state, data) {
      state.body_fat_percentage = data;
    },
    SET_IDEAL_WEIGHT(state, data) {
      state.ideal_weight = data;
    },
  },
  actions: {
    async fetchDailyCaloryRequirements({ commit }, data) {
      const url = `/dailycalorie`;
      return this.$FitnessInstance
        .get(url, {
          params: {
            age: data.age,
            gender: data.gender,
            height: data.height,
            weight: data.weight,
            activitylevel: data.activity_level,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_DAILY_CALORY_REQUIREMENTS", data);
        })
        .catch((error) => {
          console.error("Error Fetching Daily Calory Requirements", error);
        });
    },
    async fetchBMI({ commit }, data) {
      const url = `https://fitness-calculator.p.rapidapi.com/bmi`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            age: data.age,
            height: data.height,
            weight: data.weight,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_BMI", data);
        })
        .catch((error) => {
          console.error("Error Fetching BMI: ", error);
        });
    },
    async fetchBodyFatPercentage({ commit }, data) {
      const url = `https://fitness-calculator.p.rapidapi.com/bodyfat`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            age: data.age,
            gender: data.gender,
            height: data.height,
            weight: data.weight,
            neck: data.neck,
            waist: data.waist,
            hip: data.hip,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_BODY_FAT_PERCENTAGE", data);
        })
        .catch((error) => {
          console.error("Error Fetching Body Fat Percentage: ", error);
        });
    },
    async fetchIdealWeight({ commit }, data) {
      const url = `https://fitness-calculator.p.rapidapi.com/idealweight`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            gender: data.gender,
            height: data.height,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_IDEAL_WEIGHT", data);
        })
        .catch((error) => {
          console.error("Error Fetching Ideal Weight: ", error);
        });
    },
    async fetchBurnedCalorieFromActivity({ commit }, data) {
      const url = `https://fitness-calculator.p.rapidapi.com/burnedcalorie`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            activityid: data.activityid,
            activitymin: data.activitymin,
            weight: data.weight,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_BURNED_CALORIES_FROM ACTIVITY", data);
        })
        .catch((error) => {
          console.error(
            "Error Fetching Burned Calories Form Activity: ",
            error
          );
        });
    },
  },
};
