import Vue from 'vue';
import $ from 'jquery';
import Entry from './entry';

// Initialize basic settings
var entry = new Entry();
entry.init();

/**
 * Main Vue app.
 * @type {Object}
 */
var app = {
    el : 'body',
    methods: {}
};

/**
 * Global app data.
 * @type {Object}
 */
app.data = {}

/**
 * Global app methods.
 * @return {null}
 */
app.methods.example = function () {

}

/**
 * App components.
 * @type {Object}
 */
app.components = {
    example: require('./components/example')
}

/**
 * Global app filters
 * @type {Object}
 */
app.filters = {
    example: function (value) {
        return value + ' example';
    }
}

new Vue(app);
