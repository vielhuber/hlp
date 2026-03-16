module.exports = {
    testTimeout: 60 * 1000,
    testEnvironmentOptions: {
        url: 'https://tld.com/?foo=bar&bar=baz',
    },
    transform: {
        '^.+\\.(t|j)s$': 'babel-jest',
    },
};
