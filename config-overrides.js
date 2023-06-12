const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@containers': 'src/containers',
        '@routes': 'src/routes',
        '@styles': 'src/styles',
        '@constants': 'src/constants',
        '@utils': 'src/utils',
        '@store': 'src/store',

    })(config)
    return config;
}