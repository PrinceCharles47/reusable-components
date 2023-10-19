import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import { rules } from "./utils/rules";

Vue.config.productionTip = false;

Vue.prototype.$rules = rules;

const rapidAPI = {
  apiKey: process.env.VUE_APP_RAPID_API_KEY,
  apiHostFitnessCalculator:
    process.env.VUE_APP_RAPID_API_HOST_FITNESS_CALCULATOR,
  apiHostDrugInformation: process.env.VUE_APP_RAPID_API_HOST_DRUG_INFORMATION,
  apiHostCOVID_19: process.env.VUE_APP_RAPID_API_HOST_COVID_19,
  apiHostExerciseDB: process.env.VUE_APP_RAPID_API_HOST_EXERCISEDB,
  apiHostMedicalArticlesLive: process.env.VUE_APP_RAPID_API_HOST_MEDICAL_ARTICLES_LIVE,
};

const axiosInstanceFitnessCollector = axios.create({
  baseURL: "https://fitness-calculator.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": rapidAPI.apiKey,
    "X-RapidAPI-Host": rapidAPI.apiHostFitnessCalculator,
  },
});

const axiosInstanceDrugInformation = axios.create({
  baseURL: "https://drug-info-and-price-history.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": rapidAPI.apiKey,
    "X-RapidAPI-Host": rapidAPI.apiHostDrugInformation,
  },
});

const axiosInstanceCOVID19 = axios.create({
  baseURL: "https://covid-193.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": rapidAPI.apiKey,
    "X-RapidAPI-Host": rapidAPI.apiHostCOVID_19,
  },
});

const axiosInstanceExerciseDB = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": rapidAPI.apiKey,
    "X-RapidAPI-Host": rapidAPI.apiHostExerciseDB,
  },
});

const axiosInstanceMedicalArticlesLive = axios.create({
  baseURL: "https://medical-articles-live.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": rapidAPI.apiKey,
    "X-RapidAPI-Host": rapidAPI.apiHostMedicalArticlesLive,
  },
});

Vuex.Store.prototype.$FitnessInstance = axiosInstanceFitnessCollector;
Vuex.Store.prototype.$DrugInfoInstance = axiosInstanceDrugInformation;
Vuex.Store.prototype.$COVIDInstance = axiosInstanceCOVID19;
Vuex.Store.prototype.$ExerciseDBInstance = axiosInstanceExerciseDB;
Vuex.Store.prototype.$MedArticlesInstance = axiosInstanceMedicalArticlesLive;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
