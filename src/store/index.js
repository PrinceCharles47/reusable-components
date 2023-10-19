import Vue from 'vue'
import Vuex from 'vuex'
import { SymptomChecker } from './modules/SymptomChecker'
import { COVID19 } from './modules/COVID19'
import { DrugInformation } from './modules/DrugInformation'
import { FitnessCalculator } from './modules/FitnessCalculator'
import { ExerciseDB } from './modules/ExerciseDB'
import { COVIDDataFlow } from './modules/COVIDDataFlow'
import { MedicalArticlesLive } from './modules/MedicalArticlesLive'
import { MegaFitnessCalculator } from './modules/MegaFitnessCalculator'
import { FoodNutritionalData } from './modules/FoodNutritionalData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    SymptomChecker,
    COVID19,
    DrugInformation,
    FitnessCalculator,
    ExerciseDB,
    COVIDDataFlow,
    MedicalArticlesLive,
    MegaFitnessCalculator,
    FoodNutritionalData,
  }
})
