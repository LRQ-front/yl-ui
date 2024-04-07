module.exports = {
  preset: "ts-jest",

  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  //如果不添加就会报错ReferenceError: Vue is not defined
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },

  moduleNameMapper: {
    // "^\\./(.+)$": "<rootDir>/packages/$1/src/$1.ts",
    "./checkboxUtils": "<rootDir>/packages/checkbox/src/checkboxUtils.ts",
  },
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
    "vue",
  ],

  testEnvironment: "jsdom",

  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
};
