import Vue from 'vue'
import Vuex from 'vuex'
import { SymptomChecker } from './modules/SymptomChecker'
import { COVID19 } from './modules/COVID19'
import { DrugInformation } from './modules/DrugInformation'
import { FitnessCalculator } from './modules/FitnessCalculator'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    SymptomChecker,
    COVID19,
    DrugInformation,
    FitnessCalculator,
  }
})
