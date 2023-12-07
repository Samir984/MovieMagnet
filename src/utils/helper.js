export const randomNumGenerator = function (size) {
  return Math.floor(Math.random() * size);
};

export function formatDate(inputDate) {
  if (!inputDate) return;
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(inputDate);
  return date.toLocaleString("en-US", options);
}
