import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const MedicalArticlesLive = {
  namespaced: true,
  state: () => ({
    medical_journals: null,
    medical_journal: null,
  }),
  getters: {
    getMedicalJournals: (state) => state.medical_journals,
    getMedicalJournal: (state) => state.medical_journal,
  },
  mutations: {
    SET_MEDICAL_JOURNALS(state, data) {
      state.medical_journals = data;
    },
    SET_MEDICAL_JOURNAL(state, data) {
      state.medical_journal = data;
    },
  },
  actions: {
    fetchAllMedicalJournals({ commit }) {
      const url = `/journals`;
      return this.$MedArticlesInstance
        .get(url)
        .then((response) => {
          const data = response.data;
          commit("SET_MEDICAL_JOURNALS", data);
        })
        .catch((error) => {
          console.error("Error Fetching All Medical Journals", error);
        });
    },
    fetchMedicalJournalsByKeyword({ commit }, keyword) {
      const url = `/journals/${keyword}`;
      return this.$MedArticlesInstance
        .get(url)
        .then((response) => {
          const data = response.data;
          commit("SET_MEDICAL_JOURNAL", data);
        })
        .catch((error) => {
          console.error("Error Fetching Journal by Keyword", error);
        });
    },
  },
};
