"use strict";

const codepoints = require("./font/amaranth.json");

module.exports = {
  inputDir: "./icons",
  outputDir: "./font",
  fontTypes: ["woff", "woff2"],
  assetTypes: ["scss", "json"],
  fontsUrl: "./fonts",
  name: "Amaranth",
  prefix: "ai",
  selector: ".ai",
  codepoints,
  descent: 26,
  templates: {
    scss: "./build/templates/scss.hbs",
  },
  pathOptions: {
    woff: "./font/fonts/Amaranth.woff",
    woff2: "./font/fonts/Amaranth.woff2",
    scss: "./font/Amaranth.scss",
    json: "./font/amaranth.json",
  },
};
