const tsconfig = require("./tsconfig.json");
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig);

module.exports = {
  rootDir: 'src',
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  moduleFileExtensions: ['js', 'ts'],
  setupFilesAfterEnv: [
    `${process.cwd()}/config/__test__/setup/initConfig.ts`,
  ],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.ts'],
  coverageDirectory: 'coverage',
  moduleNameMapper,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 20
    },
  },
};
