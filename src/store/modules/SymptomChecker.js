import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const SymptomChecker = {
  namespaced: true,
  state: () => ({
    symptomsData: null,
  }),
  getters: {
    getSymptomsData: (state) => state.symptomsData,
  },
  mutations: {
    SET_SYMPTOMS_DATA(state, data) {
      state.symptomsData = data;
    },
  },
  actions: {
    fetchSymptomsData({ commit }, userSymptoms) {
      const url = `https://symptom-checker4.p.rapidapi.com/analyze`;
      const commonHeaders = {
        "X-RapidAPI-Key": "1edcaed7d6mshed3833e2798a6b9p14f9d9jsn499aea9e5675",
        "X-RapidAPI-Host": "symptom-checker4.p.rapidapi.com",
        "content-type": "application/json",
      };
      axios
        .post(
          url,
          {
            symptoms: userSymptoms,
          },
          {
            headers: commonHeaders,
          }
        )
        .then((response) => {
          const data = response.data;
          commit("SET_SYMPTOMS_DATA", data);
        })
        .catch((error) => {
          console.error("Error Fetching from SymptomsChecker API: ", error);
        });
    },
  },
};
