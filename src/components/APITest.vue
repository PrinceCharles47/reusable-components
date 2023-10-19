<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Symptom Checker</h1>
      </v-col>
      <v-col cols="6">
        <v-text-field label="Enter Symptoms"></v-text-field>
        <v-btn dark class="purple" @click="submitSymptoms">Submit</v-btn>
      </v-col>
      <v-col cols="6">
        <div class="">
          Data: {{ getSymptomsData ? getSymptomsData : "Not Available" }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1>Drug Info and Price History</h1>
      </v-col>
      <v-col cols="6">
        <v-text-field label="Enter Drug" v-model="drug"></v-text-field>
        <v-btn dark class="purple" @click="submitDrug">Submit</v-btn>
      </v-col>
      <v-col cols="6">
        <div class="">
          Data: {{ getDrugData ? getDrugData : "Not Available" }}
        </div>
      </v-col>
      <v-col cols="6">
        <v-text-field label="Enter Brand" v-model="drug_brand"></v-text-field>
        <v-btn dark class="purple" @click="submitForGeneric">Submit</v-btn>
      </v-col>
      <v-col cols="6">
        <div class="">
          Data: {{ getGenericData ? getGenericData : "Not Available" }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1>COVID 19 API</h1>
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="Enter Country Search"
          v-model="country_search"
        ></v-text-field>
        <v-btn dark class="purple" @click="submitForCountrySearch"
          >Submit</v-btn
        >
      </v-col>
      <v-col cols="6">
        <div class="">
          Data: {{ getCountries ? getCountries : "Not Available" }}
        </div>
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="Enter Country Statistics"
          v-model="country_statistics"
        ></v-text-field>
        <v-btn dark class="purple" @click="submitForCountryStatistics"
          >Submit</v-btn
        >
      </v-col>
      <v-col cols="6">
        <div class="">
          Data:
          {{ getCountryStatistics ? getCountryStatistics : "Not Available" }}
        </div>
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="Enter Country History"
          v-model="country_history"
        ></v-text-field>
        <v-text-field label="Enter Day" v-model="day"></v-text-field>
        <v-btn dark class="purple" @click="submitForCountryHistory"
          >Submit</v-btn
        >
      </v-col>
      <v-col cols="6">
        <div class="">
          Data:
          {{ getCountryHistory ? getCountryHistory : "Not Available" }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1>Fitness Calculator</h1>
      </v-col>
      <v-col cols="12">Daily Calory Requirements</v-col>
      <v-col cols="6">
        <v-text-field label="Age" v-model="data.age"></v-text-field>
        <v-select
          label="Gender"
          :items="selects.genders"
          v-model="data.gender"
        ></v-select>
        <v-text-field label="Height (CM)" v-model="data.height"></v-text-field>
        <v-text-field label="Weight (KG)" v-model="data.weight"></v-text-field>
        <v-select
          label="Activity Level"
          v-model="data.activity_level"
          :items="selects.activity_levels"
        ></v-select>
        <v-btn dark class="purple" @click="submitForDailyCaloryReq"
          >Submit</v-btn
        >
      </v-col>
      <v-col cols="6">
        <div class="">
          Data:
          {{
            getDailyCaloryRequirements
              ? getDailyCaloryRequirements
              : "Not Available"
          }}
        </div>
      </v-col>
      <v-col cols="12">BMI</v-col>
      <v-col cols="6">
        <v-text-field label="Age" v-model="data.age"></v-text-field>
        <v-text-field label="Height (CM)" v-model="data.height"></v-text-field>
        <v-text-field label="Weight (KG)" v-model="data.weight"></v-text-field>
        <v-btn dark class="purple" @click="submitForBMI">Submit</v-btn>
      </v-col>
      <v-col cols="6">
        <div class="">
          Data:
          {{ getBMI ? getBMI : "Not Available" }}
        </div>
      </v-col>
      <v-col cols="12">Body Fat Percentage</v-col>
      <v-col cols="6">
        <v-text-field label="Age" v-model="data.age"></v-text-field>
        <v-select
          label="Gender"
          :items="selects.genders"
          v-model="data.gender"
        ></v-select>
        <v-text-field label="Height (CM)" v-model="data.height"></v-text-field>
        <v-text-field label="Weight (KG)" v-model="data.weight"></v-text-field>
        <v-text-field label="Neck (CM)" v-model="data.neck"></v-text-field>
        <v-text-field label="Waist (CM)" v-model="data.waist"></v-text-field>
        <v-text-field label="Hip (CM)" v-model="data.hip"></v-text-field>
        <v-btn dark class="purple" @click="submitForBodyFatPercentage">Submit</v-btn>
      </v-col>
      <v-col cols="6">
        <div class="">
          Data:
          {{ getBodyFatPercentage ? getBodyFatPercentage : "Not Available" }}
        </div>
      </v-col>
      <v-col cols="12">Ideal Weight</v-col>
      <v-col cols="6">
        <v-select
          label="Gender"
          :items="selects.genders"
          v-model="data.gender"
        ></v-select>
        <v-text-field label="Height (CM)" v-model="data.height"></v-text-field>
        <v-btn dark class="purple" @click="submitForIdealWeight">Submit</v-btn>
      </v-col>
      <v-col cols="6">
        <div class="">
          Data:
          {{ getIdealWeight ? getIdealWeight : "Not Available" }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "APITest",
  data: () => ({
    symptoms: null,
    drug: null,
    drug_brand: null,
    country_search: null,
    country_statistics: null,
    country_history: null,
    day: null,
    data: {
      age: null,
      gender: null,
      height: null,
      weight: null,
      activity_level: null,
      waist: null,
      neck: null,
      hip: null,
    },
    selects: {
      activity_levels: [
        "level_1",
        "level_2",
        "level_3",
        "level_4",
        "level_5",
        "level_6",
      ],
      genders: ["male", "female"],
    },
  }),
  methods: {
    ...mapActions("SymptomChecker", ["fetchSymptomsData"]),
    ...mapActions("DrugInformation", ["fetchDrugData", "fetchDrugGenericName"]),
    ...mapActions("COVID19", [
      "fetchCountries",
      "fetchCountryStatistics",
      "fetchCountryHistory",
    ]),
    ...mapActions("FitnessCalculator", [
      "fetchDailyCaloryRequirements",
      "fetchBMI",
      "fetchBodyFatPercentage",
      "fetchIdealWeight",
    ]),
    submitSymptoms() {
      this.fetchSymptomsData(this.symptoms);
    },
    submitDrug() {
      this.fetchDrugData(this.drug);
    },
    submitForGeneric() {
      this.fetchDrugGenericName(this.drug_brand);
    },
    submitForCountrySearch() {
      this.fetchCountries(this.country_search);
    },
    submitForCountryStatistics() {
      this.fetchCountryStatistics(this.country_statistics);
    },
    submitForCountryHistory() {
      this.fetchCountryHistory({
        countryRequest: this.country_history,
        day: this.day,
      });
    },
    submitForDailyCaloryReq() {
      this.fetchDailyCaloryRequirements(this.data);
    },
    submitForBMI() {
      this.fetchBMI(this.data);
    },
    submitForBodyFatPercentage() {
      this.fetchBodyFatPercentage(this.data);
    },
    submitForIdealWeight() {
      this.fetchIdealWeight(this.data);
    }
  },
  computed: {
    ...mapGetters("SymptomChecker", ["getSymptomsData"]),
    ...mapGetters("DrugInformation", ["getDrugData", "getGenericData"]),
    ...mapGetters("COVID19", [
      "getCountries",
      "getCountryStatistics",
      "getCountryHistory",
    ]),
    ...mapGetters("FitnessCalculator", [
      "getDailyCaloryRequirements",
      "getBMI",
      "getBodyFatPercentage",
      "getIdealWeight",
    ]),
  },
  watch: {
    getSymptomsData(value) {
      console.log("Symptoms Findings: ", value);
    },
    getDrugData(value) {
      console.log("Drug Information Findings: ", value);
    },
    getGenericData(value) {
      console.log("Generic Data: ", value);
    },
    getCountries(value) {
      console.log("Countries", value);
    },
    getCountryStatistics(value) {
      console.log("Country Statistics", value);
    },
    getCountryHistory(value) {
      console.log("Country History", value);
    },
    getDailyCaloryRequirements(value) {
      console.log("Daily Calories Required", value);
    },
    getBMI(value) {
      console.log("BMI: ", value);
    },
    getBodyFatPercentage(value) {
      console.log("Body Fat Percentage: ", value);
    },
    getIdealWeight(value) {
      console.log("Ideal Weight: ", value);
    }
  },
};
</script>

<style scoped></style>
