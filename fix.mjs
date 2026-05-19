import fs from "fs";

const div = String.fromCharCode(60, 47, 100, 105, 118, 62);
const motionClose = String.fromCharCode(60, 47, 109, 111, 116, 105, 111, 110, 46, 100, 105, 118, 62);

const lines = fs.readFileSync("src/components/AuthModal.tsx", "utf8").split(/\r?\n/);

lines[209] = "            " + div;
lines[210] = "          " + div;
lines[220] = "        " + div;
lines[437] = "      " + motionClose;
lines[438] = "    " + div;

fs.writeFileSync("src/components/AuthModal.tsx", lines.join("\n"));
console.log("fixed");
