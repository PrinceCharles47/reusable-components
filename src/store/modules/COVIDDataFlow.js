import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const COVIDDataFlow = {
  namespaced: true,
  state: () => ({
    results_countries: null,
    results_world: null,
    result_country: null,
  }),
  getters: {
    getResultsCountries: (state) => state.results_countries,
    getResultsWorld: (state) => state.results_world,
    getResultCountry: (state) => state.result_country,
  },
  mutations: {
    SET_RESULTS_COUNTRIES(state, data) {
      state.results_countries = data;
    },
    SET_RESULTS_WORLD(state, data) {
      state.results_world = data;
    },
    SET_RESULTS_COUNTRY(state, data) {
      state.result_country = data;
    },
  },
  actions: {
    async fetchResultsCountries({ commit }) {
      const url = `https://covid-19.dataflowkit.com/v1`;
      return axios
        .get(url)
        .then((response) => {
          const data = response.data;
          commit("SET_RESULTS_COUNTRIES", data);
        })
        .catch((error) => {
          console.error("Error Fetching all results", error);
        });
    },
    async fetchWorldSummaryResults({ commit }) {
      const url = `https://covid-19.dataflowkit.com/v1/world`;
      return axios
        .get(url)
        .then((response) => {
          const data = response.data;
          commit("SET_RESULTS_WORLD", data);
        })
        .catch((error) => {
          console.error("Error Fetching world results", error);
        });
    },
    async fetchCountryResults({ commit }, country) {
      const url = `https://covid-19.dataflowkit.com/v1/${country}`;
      return axios
        .get(url)
        .then((response) => {
          const data = response.data;
          commit("SET_RESULTS_COUNTRY", data);
        })
        .catch((error) => {
          console.error("Error Fetching country results", error);
        });
    },
  },
};
