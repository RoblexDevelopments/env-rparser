const { readFileSync } = require("fs");

module.exports = (debug = false) => {
  return readFileSync(`${process.cwd()}/.env`)
    .toString()
    .split("\n")
    .map((str) => {
      const data = parseEnv(str);
      if (debug) console.log(data);
      process.env[data.namespace] = data.str;
      return process.env;
    });
};

const parseEnv = (data) => {
  const namespace = /[a-z0-9]+/gi.exec(data)[0];
  const str = data.replace(/[a-z0-9\s+]+=/gi, "").replace(/\r|\n/g, "");

  if (!namespace) throw new Error(`Need a namespace`);

  return { namespace, str: str.replace(/"|'/g, "") };
};
