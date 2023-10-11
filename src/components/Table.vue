<template>
  <v-card flat class="px-4">
    <v-card-title class="px-0">{{
      tableDetails.title !== undefined ? tableDetails.title : null
    }}</v-card-title>

    <div class="d-flex align-center">

      <v-text-field
        hide-details="auto"
        v-model="searchItem"
        outlined
        dense
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </div>

    <v-row class="mt-4">
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
            class="ml-3 mb-1"
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
            class="white--text text-h6 px-4"
            >FILTER ITEMS</v-toolbar
          >

          <v-form class="mx-8 mt-6">
            <v-combobox
              v-for="(option, i) in filterOptions"
              :key="i"
              v-model="option.filteredItems"
              :items="option.items"
              chips
              clearable
              :label="option.category.toUpperCase()"
              multiple
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
          </v-form>

          <v-card-actions class="justify-end py-4 mx-4">
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
          outlined
          :text-color="tableDetails.color.primary"
          :color="tableDetails.color.secondary"
          class="mr-1 mb-1"
          v-for="(chip, i) in chipNames"
          :key="i"
        >
          {{ chip.toUpperCase() }}
        </v-chip>
      </v-col>
    </v-row>

    <v-data-table
      :headers="tableDetails.headers"
      :items="itemList"
      :search="searchItem"
      class="mt-4"
      @click:row="redirect"
    >
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
        >
          {{ action.name }}
        </v-btn>
      </template>
    </v-data-table>
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
//##################################################################

export default {
  name: "Table",
  props: {
    tableDetails: Object,
    filter: Object,
  },
  data: () => ({
    searchItem: null,

    dialogFilter: false,

    itemList: [],
    chipNames: [],

    filterSelected: [],
  }),

  methods: {
    //Resets the selected filter
    removeSelectedFilter: function (item) {
      this.filterSelected.splice(this.filterSelected.indexOf(item), 1);
    },

    filterList() {
      //Returns filtered items else all table items

      let newTableItems = [];
      this.chipNames = []
      let oldTableItems = this.tableDetails.items;
      let currentFilter = null;
      let previousFilter = null;

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
                console.log(tableItem);
              }
            });
          });

          oldTableItems = newTableItems;
        }

        if (newTableItems.length <= 0) {
          return (this.itemList = this.tableDetails.items);
        }

        console.log(newTableItems);
        return (this.itemList = newTableItems);
      });
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
