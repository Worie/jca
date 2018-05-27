const fs = require('fs');

const run = function (directory) {
  const contents = getContents(directory);
  const minified = contents.map(json => minifyJSONString(json));
  console.log(`[${minified.join(',')}]`);
}

const minifyJSONString = function (string) {
  return JSON.stringify(JSON.parse(string));
}

const getContents = function (directory) {
  const entries = fs.readdirSync(directory);

  const jsons = entries.filter(entry => entry.match(/\.json$/))

  return jsons.map(jsonFile => fs.readFileSync(jsonFile));
}

exports.run = run;