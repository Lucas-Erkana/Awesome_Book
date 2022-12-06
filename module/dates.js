const date = window.luxon;
const today = date.DateTime.local();

const {
  year, day, month, hour, minute, second,
} = today;

const dateNow = `${day}/${month}/${year}  ${hour}:${minute}:${second}`;
export { dateNow as default };