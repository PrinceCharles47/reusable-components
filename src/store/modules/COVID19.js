import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

//Headers for this API Use
const headers = {
  "X-RapidAPI-Key": "1edcaed7d6mshed3833e2798a6b9p14f9d9jsn499aea9e5675",
  "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
};

Vue.use(Vuex);

export const COVID19 = {
  namespaced: true,
  state: () => ({
    countries: null,
    country_statistics: null,
    country_history: null,
  }),
  getters: {
    getCountries: (state) => state.countries,
    getCountryStatistics: (state) => state.country_statistics,
    getCountryHistory: (state) => state.country_history,
  },
  mutations: {
    SET_COUNTRIES(state, data) {
      state.countries = data;
    },
    SET_COUNTRY_STATISTICS(state, data) {
      state.country_statistics = data;
    },
    SET_COUNTRY_HISTORY(state, data) {
      state.country_history = data;
    },
  },
  actions: {
    async fetchCountries({ commit }, searchRequest) {
      //searchRequest is a string but will return all countries if null.
      const url = `https://covid-193.p.rapidapi.com/countries`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            search: searchRequest,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_COUNTRIES", data);
        })
        .catch((error) => {
          console.error("Error Fetching Countries", error);
        });
    },
    async fetchCountryStatistics({ commit }, countryRequest) {
      const url = `https://covid-193.p.rapidapi.com/statistics`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            country: countryRequest,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_COUNTRY_STATISTICS", data);
        })
        .catch((error) => {
          console.error("Error Fetching Country Statistics", error);
        });
    },
    async fetchCountryHistory({ commit }, { countryRequest, day }) {
      const url = `https://covid-193.p.rapidapi.com/history`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            country: countryRequest,
            day: day,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_COUNTRY_HISTORY", data);
        })
        .catch((error) => {
          console.error("Error Fetching Country History: ", error);
        });
    },
  },
};
