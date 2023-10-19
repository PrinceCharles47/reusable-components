<template>
  <v-row class="fill-height">
    <v-dialog
      v-model="dialogAddEvent"
      transition="dialog-bottom-transition"
      max-width="500"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ml-auto mr-3 mt-4 white--text"
          @click="addEvent"
          v-on="on"
          v-bind="attrs"
          :color="color.primary"
          >Schedule Appointment</v-btn
        >
      </template>

      <v-card>
        <v-toolbar flat :color="color.secondary" class="white--text text-h6"
          >SCHEDULE AN APPOINTMENT</v-toolbar
        >

        <v-form class="mx-3 mt-6">
          <p class="mb-1 text-subtitle-2">Date</p>
          <v-menu v-model="dateMenu" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-on="on"
                v-bind="attrs"
                dense
                outlined
                v-model="event.date"
              >
              </v-text-field>
            </template>
            <v-date-picker
              v-model="event.date"
              color="green lighten-1"
            ></v-date-picker>
          </v-menu>

          <!-- :rules="$rules.required('Start time')" -->
          <p class="mb-1 text-subtitle-2">Start Time</p>
          <v-text-field
            v-model="event.timeStart"
            outlined
            dense
            type="time"
          ></v-text-field>

          <p class="mb-1 text-subtitle-2">End Time</p>
          <v-text-field
            v-model="event.timeEnd"
            outlined
            dense
            type="time"
          ></v-text-field>
        </v-form>

        <v-card-actions class="justify-end py-4 px-3">
          <v-btn text color="red" class="px-8" @click="dialogAddEvent = false"
            >Close</v-btn
          >
          <v-btn
            :color="color.primary"
            class="white--text px-8"
            @click="addEvent"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-col cols="12">
      <v-card class="d-flex flex-column flex-md-row align-center pa-4">
        <div class="d-flex align-center mb-2 mb-md-0">
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
        </div>

        <v-spacer></v-spacer>

        <div class="d-flex align-center justify-start justify-md-end">
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Today
          </v-btn>
          <v-menu bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right> mdi-menu-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <!-- <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn> -->
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <!-- <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn> -->
              <!-- <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn> -->
            </v-toolbar>
            <v-card-text>
              <span>{{ selectedEvent.details }}</span>
            </v-card-text>
            <v-card-actions>
              <v-btn
                outlined
                :color="selectedEvent.color"
                @click="selectedOpen = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Calendar",
  data: () => ({
    dialogAddEvent: false,
    dateMenu: false,

    color: {
      primary: "#7B40F9",
      secondary: "#A981FF",
    },

    event: {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),

      timeEnd: null,
      timeStart: null,
    },

    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      {
        name: "Meeting",
        details: "hello",
      },
      {
        name: "Holiday",
        details: "hello",
      },
      {
        name: "PTO",
        details: "hello",
      },
      {
        name: "Travel",
        details: "hello",
      },
    ],
  }),
  mounted() {
    this.$refs.calendar.checkChange();
    // this.events.push({
    //     name: "Moshi Moshi",
    //     details: "Moshi",
    //     start: new Date(`2023-11-07 15:50`),
    //     start: new Date(`2023-11-07 16:50`),
    //     timed: true,
    //     color: this.colors[this.random(0, this.colors.length - 1)],
    //   });
  },
  methods: {
    addEvent: function () {
      this.events.push({
        name: "Hello World",
        details: "HELLO",
        start: new Date(`${this.event.date} ${this.event.timeStart}`),
        end: new Date(`${this.event.date} ${this.event.timeEnd}`),
        timed: true,
        color: this.colors[this.random(0, this.colors.length - 1)],
      });


      this.closeDialog("dialogAddEvent");
      this.event.timeStart = null;
      this.event.timeEnd = null;
    },

    closeDialog: function (dialog) {
      this[dialog] = false;
    },

    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      // const min = new Date(`${start.date}T00:00:00`);
      // const max = new Date(`${end.date}T23:59:59`);
      // const days = (max.getTime() - min.getTime()) / 86400000;
      // const eventCount = this.random(days, days + 20);

      // for (let i = 0; i < eventCount; i++) {
      //   const allDay = this.random(0, 3) === 0;
      //   const firstTimestamp = this.random(min.getTime(), max.getTime());
      //   const first = new Date(firstTimestamp - (firstTimestamp % 900000));
      //   const secondTimestamp = this.random(2, allDay ? 288 : 8) * 900000;
      //   const second = new Date(first.getTime() + secondTimestamp);
      //   const event = this.names[this.random(0, this.names.length - 1)];

      //   console.log(first);

      //   events.push({
      //     name: event.name,
      //     details: event.details,
      //     start: first,
      //     end: second,
      //     color: this.colors[this.random(0, this.colors.length - 1)],
      //     timed: !allDay,
      //   });
      // }

      this.events = [];

      let today = new Date();
      let days = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ];

      // if (this.studentSchedule.length > 0) {
      //   this.studentSchedule.map((val, i) => {
      //     console.log(val.scheduleDate);
      //     if (val.scheduleDate) {
      //       val.scheduleDate.map((schedule) => {
      //         let scheduleDayIndex = days.findIndex(
      //           (val) => val == schedule.day
      //         );
      //         let diff = scheduleDayIndex - today.getDay();
      //         let scheduleDay = new Date(today.setDate(today.getDate() + diff));
      //         let start = this.getDateTime(scheduleDay, schedule.timeStart);
      //         let end = this.getDateTime(scheduleDay, schedule.timeEnd);

      this.events.push({
        name: "Hello World",
        details: "HELLO",
        start: new Date(`${this.event.date} ${this.event.timeStart}`),
        end: new Date(`${this.event.date} ${this.event.timeEnd}`),
        timed: true,
        color: this.colors[this.random(0, this.colors.length - 1)],
      });
      //       });
      //     }
      //   });
      // }
    },
    random(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>
