import $ from 'jquery';
import Vue from 'vue';
import VueResource from 'vue-resource';
import './components/';

class App {

    /**
     * Set app views and properties.
     * @return {null}
     */
    constructor() {
        this.currentRoute = $('body').data('route');
        this.csrfToken = $('meta[name="csrf"]').attr('content');
    }

    /**
     * Initialize app
     * @return {void}
     */
    init() {
        // add any polyfills, bindings etc etc.

        this.views();
        this.loadView(this.currentRoute);
    }

    /**
     * Register app views.
     * @return {null}
     */
    views() {
        this.views = {
            'index': require('./views/index')
        };
    }

    /**
     * Load route vue instance.
     * @return {void}
     */
    loadView() {
        if (this.views[this.currentRoute]) {
            Vue.use(VueResource);
            Vue.http.options.root = $('body').data('base');
            Vue.http.headers.common['X-CSRF-TOKEN'] = this.csrfToken;
            new Vue(this.views[this.currentRoute]);
        }
    }
}

export default App;
