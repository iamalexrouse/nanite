/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  displayName: 'Nanite | Tests',
  errorOnDeprecated: false, // Set to true for compatibility. Will be set to false before v2.
  verbose: true
};