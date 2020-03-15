<template>
  <div>
    <h1>Booking</h1>
    {{t}}
    <FullCalendar :events="events" :options="options" />
  </div>
</template>
<script>
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  name: "Booking",
  data() {
    return {
      t: new Date().toLocaleDateString("en-US"),
      //actualDay: this.t.toLocaleDateString("en-US"),
      options: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultDate: this.t,
        header: {
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        },
        editable: true
      },
      events: [
        {
          id: 1,
          title: "All Day Event",
          start: "2019-01-01"
        },
        {
          id: 2,
          title: "Long Event",
          start: "2019-01-07",
          end: "2019-01-10"
        }
      ]
    };
  }
};
</script>