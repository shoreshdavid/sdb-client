// import * as moment from 'moment';

let today = new Date();
let y = today.getFullYear();
let m = today.getMonth();
let d = today.getDate();

// const tod = moment(today, moment.ISO_8601).toDate();

export const events = [
  {
    title: 'Awesome one',
    allDay: false,
    start: today,
    end: new Date(y, m, 1),
    color: 'default',
  },
  {
    title: 'Meeting',
    start: new Date(y, m, d - 1, 10, 30),
    end: new Date(y, m, d - 1, 11, 30),
    allDay: false,
    color: 'green',
  },
  {
    title: 'Lunch',
    start: new Date(y, m, d + 7, 12, 0),
    end: new Date(y, m, d + 7, 14, 0),
    allDay: false,
    color: 'red',
  },
];
