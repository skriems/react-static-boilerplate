module.exports = {
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testPathIgnorePatterns: ['/node_modules/', './dist', './artifacts', './public'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts|js)$',
  transform: {
    '^.+\\.(tsx|ts|js)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^containers/(.*)$': '<rootDir>/src/containers/$1',
    '^types/(.*)$': '<rootDir>/types/$1',
  },
};
