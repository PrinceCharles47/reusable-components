import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const headers = {
  "X-RapidAPI-Key": "1edcaed7d6mshed3833e2798a6b9p14f9d9jsn499aea9e5675",
  "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
};

Vue.use(Vuex);

export const MegaFitnessCalculator = {
  namespaced: true,
  state: () => ({
    bmi: null,
    bmr: null,
    bfp: null,
    ibw: null,
    whr: null,
    absi: null,
    tdee: null,
  }),
  getters: {
    getBMI: (state) => state.bmi,
    getBMR: (state) => state.bmr,
    getBFP: (state) => state.bfp,
    getIBW: (state) => state.ibw,
    getWHR: (state) => state.whr,
    getABSI: (state) => state.absi,
    getTDEE: (state) => state.tdee,
  },
  mutations: {
    SET_BMI(state, data) {
      state.bmi = data;
    },
    SET_BMR(state, data) {
      state.bmr = data;
    },
    SET_BFP(state, data) {
      state.bfp = data;
    },
    SET_IBW(state, data) {
      state.ibw = data;
    },
    SET_WHR(state, data) {
      state.whr = data;
    },
    SET_ABSI(state, data) {
      state.absi = data;
    },
    SET_TDEE(state, data) {
      state.tdee = data;
    },
  },
  actions: {
    async fetchBodyMassIndex({ commit }, { weight, height }) {
      const url = `https://mega-fitness-calculator1.p.rapidapi.com/bmi`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            weight: weight,
            height: height,
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
    async fetchBasalMetabolicRate({ commit }, { weight, height, age, gender }) {
      const url = `https://mega-fitness-calculator1.p.rapidapi.com/bmr`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            weight: weight,
            height: height,
            age: age,
            gender: gender,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_BMR", data);
        })
        .catch((error) => {
          console.error("Error Fetching BMR: ", error);
        });
    },
    async fetchBodyFatPercentage({ commit }, { weight, height, age, gender }) {
      const url = `https://mega-fitness-calculator1.p.rapidapi.com/bfp`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            weight: weight,
            height: height,
            age: age,
            gender: gender,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_BFP", data);
        })
        .catch((error) => {
          console.error("Error Fetching BFP: ", error);
        });
    },
    async fetchIdealBodyWeight({ commit }, { weight, height, gender }) {
      const url = `https://mega-fitness-calculator1.p.rapidapi.com/ibw`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            weight: weight,
            height: height,
            gender: gender,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_IBW", data);
        })
        .catch((error) => {
          console.error("Error Fetching IBW: ", error);
        });
    },
    async fetchWaistHipRatio({ commit }, { waist, hip, gender }) {
      const url = `https://mega-fitness-calculator1.p.rapidapi.com/whr`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            waist: waist,
            hip: hip,
            gender: gender,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_WHR", data);
        })
        .catch((error) => {
          console.error("Error Fetching WHR: ", error);
        });
    },
    async fetchABodyShapeIndex(
      { commit },
      { weight, height, age, waist, gender }
    ) {
      const url = `https://mega-fitness-calculator1.p.rapidapi.com/absi`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            waist: waist,
            age: age,
            gender: gender,
            weight: weight,
            height: height,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_ABSI", data);
        })
        .catch((error) => {
          console.error("Error Fetching ABSI: ", error);
        });
    },
    async fetchTotalDailyEnergyExpenditure(
      { commit },
      { weight, height, age, activitylevel, gender }
    ) {
      const url = `https://mega-fitness-calculator1.p.rapidapi.com/tdee`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            activitylevel: activitylevel,
            age: age,
            gender: gender,
            weight: weight,
            height: height,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_TDEE", data);
        })
        .catch((error) => {
          console.error("Error Fetching TDEE: ", error);
        });
    },
  },
};
