export const clearMocks = true
export const transform = {
    '\\.[jt]sx?$': 'babel-jest'
}
export const moduleFileExtensions = ['js', 'json', 'jsx', 'ts']
export const coveragePathIgnorePatterns = [
    '<rootDir>/dist/',
    '<rootDir>/public/',
    '<rootDir>/node_modules/',
    '<rootDir>/docs/',
    '<rootDir>/build/'
]
export const testPathIgnorePatterns = [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/docs/',
    '<rootDir>/build/'
]
export const collectCoverageFrom = ['src/**']
