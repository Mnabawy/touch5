const fs = require("fs");

exports.writehtml5public = writeHTMLFive;
function writeHTMLFive() {
  const html5 = fs.readFileSync(`${__dirname}/index.html`);
  const filename = process.argv[2];
  fs.writeFileSync(`${process.cwd()}/${filename}`, html5);
}

writeHTMLFive();
