module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                shippedProposals: true,
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-optional-chaining',
    ],
};
