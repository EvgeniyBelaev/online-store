const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@containers': 'src/containers',
        '@routes': 'src/routes',
        '@styles': 'src/styles',
        '@constants': 'src/constants',

    })(config)
    return config;
}