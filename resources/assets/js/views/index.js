import $ from 'jquery';

var index = {
    el: 'body',
    methods: {}
};

/**
 * Index page vue instance data.
 * @type {Object}
 */
index.data = {};

/**
 * Once the dom is rendered for the first time.
 * @return {null}
 */
index.ready = function () {
    console.log('Index page.');
}

export default index;
