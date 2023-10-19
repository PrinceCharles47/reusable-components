<template>
  <v-card flat class="px-4 pb-4">
    <Alert :alert="alert" />

    <div class="d-flex flex-md-row align-md-center flex-column">
      <v-card-title class="px-0">{{
        tableDetails.title !== undefined ? tableDetails.title : null
      }}</v-card-title>

      <v-divider vertical class="mx-4 my-0 my-md-2"></v-divider>

      <v-text-field
        hide-details="auto"
        v-model="searchItem"
        outlined
        rounded
        dense
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </div>

    <v-row class="mt-2">
      <v-dialog
        v-model="dialogFilter"
        transition="dialog-bottom-transition"
        max-width="500"
        persistent
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="filter !== undefined && filter.isFilter"
            v-bind="attrs"
            v-on="on"
            elevation="0"
            small
            class="ml-3 mb-4 mb-md-2"
          >
            Filters
            <v-icon small class="ml-2" :color="tableDetails.color.primary"
              >mdi-filter-variant</v-icon
            >
          </v-btn>
        </template>

        <v-card>
          <v-toolbar
            flat
            :color="tableDetails.color.secondary"
            class="white--text text-h6"
            >FILTER ITEMS</v-toolbar
          >

          <v-form class="mx-3 mt-6">
            <div v-for="(option, i) in filterOptions" :key="i">
              <p class="mb-1 text-subtitle-2">
                {{ option.category.toUpperCase() }}
              </p>
              <v-combobox
                v-model="option.filteredItems"
                :items="option.items"
                chips
                clearable
                multiple
                outlined
                dense
              >
                <template v-slot:selection="{ attrs, item, select, selected }">
                  <v-chip
                    v-bind="attrs"
                    small
                    :input-value="selected"
                    close
                    @click="select"
                    @click:close="removeSelectedFilter(item)"
                    outlined
                    :text-color="tableDetails.color.primary"
                    :color="tableDetails.color.secondary"
                  >
                    {{ item }}
                  </v-chip>
                </template>
              </v-combobox>
            </div>
          </v-form>

          <v-card-actions class="justify-end py-4 px-3">
            <v-btn text color="red" class="px-8" @click="dialogFilter = false"
              >Close</v-btn
            >
            <v-btn
              :color="tableDetails.color.primary"
              class="white--text px-8"
              @click="
                dialogFilter = false;
                filterList();
              "
              >Apply</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-col class="pt-0">
        <v-chip
          small
          close
          :text-color="'white'"
          :color="tableDetails.color.secondary"
          class="mr-1 mb-1"
          v-for="(chip, i) in chipNames"
          :key="i"
          @click:close="removeSelectedFilter(chip)"
        >
          {{ chip.toUpperCase() }}
        </v-chip>
      </v-col>
    </v-row>

    <v-card flat>
      <v-data-table
        :headers="tableDetails.headers"
        :items="itemList"
        :search="searchItem"
        class="mt-4"
        @click:row="redirect"
        show-select
        item-key="random"
      >
        <!-- <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <v-container>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in itemList" :key="item.name">
                      <td>{{ item.name }}</td>
                      <td>{{ item.specialization }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-container>
          </td>
        </template> -->

        <template
          v-if="tableDetails.actions !== undefined"
          v-slot:[`item.action`]="{ item }"
        >
          <v-btn
            small
            elevation="0"
            outlined
            class="font-weight-bold mr-2"
            v-for="(action, i) in tableDetails.actions"
            :key="i"
            :style="`border-color: #F0F0F0; color: ${action.color};`"
            @click="buttonFunction('hello')"
          >
            {{ action.name }}
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-card>
</template>

<script>
//##################################################################
// PROPS:
// tableDetails: {
//   colors: {
//     primary: hex,
//     secondary: hex
//   }
//   title: String (optional)
//   withRedirect: {
//     (row click event. use this or actions)
//     to: String (route name)
//   }
//   actions: [
//     (header with value: 'action' must be present in headers)
//     {
//       name: String,
//       color: hex
//     }
//   ]
//   items: Array of Objects
//   headers: Array of Objects
// }

// filter: { (optional)
//   isFilter: Boolean,
//   columnsToFilter: [
//     {
//       columnValue: String, (value of column to filter in header)
//       filteredArray: Empty Array, (will contain filtered items)
//     },
//   ],
// },
//
// buttonFunction (function for the action/button within the table)
//##################################################################

import Alert from "../components/Alert.vue";

export default {
  name: "Table",
  props: {
    tableDetails: Object,
    filter: Object,
    buttonFunction: Function,
  },

  components: {
    Alert,
  },

  data: () => ({
    alert: {
      message: "No items found. Displaying all data.",
      timeout: 3000,
      isAlert: false,
      type: "error",
    },
    searchItem: null,

    dialogFilter: false,

    itemList: [],
    chipNames: [],

    filterSelected: [],
  }),

  methods: {
    //Resets the selected filter
    removeSelectedFilter: function (item) {
      this.filterOptions.map((option) => {
        let index = option.filteredItems.indexOf(item);
        if (index >= 0) {
          option.filteredItems.splice(index, 1);
        }
      });

      this.filterList();
    },

    filterList() {
      //Returns filtered items else all table items
      let newTableItems = [];
      this.chipNames = [];
      let oldTableItems = this.tableDetails.items;
      let currentFilter = null;
      let previousFilter = null;
      let isFilterEmpty = true;

      if (this.filter === undefined) {
        return (this.itemList = this.tableDetails.items);
      }

      this.filterOptions.map((filter) => {
        currentFilter = filter.category;
        if (filter.filteredItems.length > 0) {
          if (previousFilter !== currentFilter) {
            previousFilter = currentFilter;
            newTableItems = [];
          }
          filter.filteredItems.map((item) => {
            this.getChipItems(item);
            oldTableItems.map((tableItem) => {
              if (
                tableItem[filter.category].toLowerCase() === item.toLowerCase()
              ) {
                newTableItems.push(tableItem);
              }
            });
          });

          oldTableItems = newTableItems;
        }
      });

      this.filterOptions.forEach((option) => {
        if (option.filteredItems.length !== 0) {
          isFilterEmpty = false;
        }
      });

      if (isFilterEmpty) {
        return (this.itemList = this.tableDetails.items);
      } else {
        if (newTableItems.length <= 0) {
          this.alert.isAlert = true;
          // this.chipNames = [];
          // return (this.itemList = this.tableDetails.items);
        }

        return (this.itemList = newTableItems);
      }
    },

    getChipItems: function (item) {
      this.chipNames.push(item);
    },

    redirect: function (row) {
      if (this.tableDetails.withRedirect === undefined) {
        return null;
      }

      this.$router.push({
        name: this.tableDetails.withRedirect.to,
        params: { ...row },
      });
    },
  },

  computed: {
    tableItems() {
      if (this.itemList.length === 0) {
        return this.tableDetails.items;
      }
      return this.itemList;
    },

    // Returns the options or items to choose from when filtering table items
    filterOptions() {
      if (this.filter === undefined) {
        return [];
      }

      let options = [];
      let columnValues = [];

      this.filter.columnsToFilter.forEach((column) => {
        this.tableDetails.items.map((item) => {
          columnValues.push(item[column.columnValue]);
        });

        let optionsSet = new Set(columnValues);

        options.push({
          category: column.columnValue,
          filteredItems: column.filteredArray,
          items: [...optionsSet],
        });

        columnValues = [];
      });

      return options;
    },
  },

  mounted() {
    this.itemList = this.tableDetails.items;
  },
};
</script>

<style scoped></style>
