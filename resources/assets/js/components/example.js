import Vue from 'vue';

/**
 * Simple example component.
 * @type {Object}
 */
var example = {
    template: '<p>Example</p>'
};

/**
 * Component data.
 * @return {Object}
 */
example.data = function () {
    return {};
}

/**
 * Once the component is inserted on the dom.
 * @return {null}
 */
example.ready = function () {

}

Vue.component('example', example);
