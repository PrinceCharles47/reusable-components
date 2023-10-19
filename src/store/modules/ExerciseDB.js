import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const ExerciseDB = {
  namespaced: true,
  state: () => ({
    exercisesOnMuscle: null,
    exercisesOnBodyPart: null,
  }),
  getters: {
    getExercisesByTargetMuscle: (state) => state.exercisesOnMuscle,
    getExercisesByBodyPart: (state) => state.exercisesOnBodyPart,
  },
  mutations: {
    SET_TARGET_EXERCISE_ONMUSCLE(state, data) {
      state.exercisesOnMuscle = data;
    },
    SET_TARGET_EXERCISE_ONBODYPART(state, data) {
      state.exercisesOnBodyPart = data;
    },
  },
  actions: {
    fetchExercisesByTargetMuscle({ commit }, target) {
      const url = `/exercises/target/${target}`;
      return this.$ExerciseDBInstance
        .get(url, {
          params: {
            limit: 1, //Manipulable
            offset: 0, //Manipulable
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_TARGET_EXERCISE_ONMUSCLE", data);
        })
        .catch((error) => {
          console.error("Error Fetching Target Exercise by Muscle", error);
        });
    },
    fetchExercisesByBodyPart({ commit }, body_part) {
      const url = `/exercises/bodyPart/${body_part}`;
      return this.$ExerciseDBInstance
        .get(url, {
          params: {
            limit: 1, //Manipulable
            offset: 0, //Manipulable
          },
        })
        .then((response) => {
          const data = response.data;
          commit("SET_TARGET_EXERCISE_ONBODYPART", data);
        })
        .catch((error) => {
          console.error("Error Fetching Target Exercise by Body Part", error);
        });
    },
  },
};
