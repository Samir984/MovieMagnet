export const randomNumGenerator = function (size) {
  return Math.floor(Math.random() * size);
};

export function formatDate(inputDate) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(inputDate);
  return date.toLocaleString("en-US", options);
}

export function formatTime(min) {
  var hours = Math.floor(min / 60);
  var minutes = (min % 60).toString().padStart(2, "0");

  return hours + "hr:" + minutes + "min";
}
