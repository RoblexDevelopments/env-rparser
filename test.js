require("./index")(true);

console.log(
  process.env.SECRET,
  process.env.OTHER,
  process.env.TEST,
  process.env.BIG
);
