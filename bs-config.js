
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    'ui': {
        'port': 3001,
        'weinre': {
            'port': 8080
        }
    },
    'files': [
        'resources/assets/sass/**/*.scss',
        'resources/assets/js/**/*.js',
        'resources/views/**/*.php',
    ],
    'server': false,
    'proxy': 'laravel.app:8000',
    'port': 3000,
    'ghostMode': {
        'clicks': true,
        'scroll': true,
        'forms': {
            'submit': true,
            'inputs': true,
            'toggles': true
        }
    },
    'clientEvents': [
        'scroll',
        'input:text',
        'input:toggles',
        'form:submit',
        'form:reset',
        'click'
    ],
    'socket': {
        'path': '/browser-sync/socket.io',
        'clientPath': '/browser-sync',
        'namespace': '/browser-sync',
        'clients': {
            'heartbeatTimeout': 5000
        }
    }
};
