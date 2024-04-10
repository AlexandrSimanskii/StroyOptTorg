const data = "2024-04-10T14:51:53.342+00:00";

const result = data
  .match(/\d{4}-\d{2}-\d{2}/g)[0]
  .split("-")
  .reverse()
  .join(".");
