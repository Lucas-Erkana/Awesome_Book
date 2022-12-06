const date = window.luxon;
const today = date.DateTime.local();

const {
  year, day, month, hour, minute, second,
} = today;

export const dateNow = `${day}/${month}/${year}  ${hour}:${minute}:${second}`;
