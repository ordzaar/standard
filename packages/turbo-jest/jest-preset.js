const preset = require("@ordzaar/jest/jest-preset");

module.exports = {
  ...preset,
  globalSetup: `${__dirname}/jest-turbo.js`,
};
