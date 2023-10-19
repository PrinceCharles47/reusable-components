import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

//Headers for this API Use
const headers = {
  "X-RapidAPI-Key": "1edcaed7d6mshed3833e2798a6b9p14f9d9jsn499aea9e5675",
  "X-RapidAPI-Host": "drug-info-and-price-history.p.rapidapi.com",
};

Vue.use(Vuex);

export const DrugInformation = {
  namespaced: true,
  state: () => ({
    drugData: null,
    genericData: null,
  }),
  getters: {
    getDrugData: (state) => state.drugData,
    getGenericData: (state) => state.genericData,
  },
  mutations: {
    SET_DRUG_DATA(state, data) {
      state.drugData = data;
    },
    SET_GENERIC_DATA(state, data) {
      state.genericData = data;
    },
  },
  actions: {
    async fetchDrugData({ commit }, drugRequest) {
      //"brand" params will be in 'string'
      
      //Request URL
      const url = `https://drug-info-and-price-history.p.rapidapi.com/1/druginfo`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            drug: drugRequest,
          },
        })
        .then((response) => {
          const data = response.data[0];
          commit("SET_DRUG_DATA", data);
        })
        .catch((error) => {
          console.error("Error Fetching from DrugInformation API: ", error);
        });
    },
    async fetchDrugGenericName({ commit }, brand) {
      //"brand" params will be in 'string'

      //Request URL
      const url = `https://drug-info-and-price-history.p.rapidapi.com/1/genericname`;
      return axios
        .get(url, {
          headers: headers,
          params: {
            drug: brand,
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_GENERIC_DATA", data);
        })
        .catch((error) => {
          console.error("Error Fetching from DrugInformation API: ", error);
        });
    },
  },
};
