import $ from 'jquery';

class AnalyticsHelper {

    /**
     * Initialize helper
     */

    init () {
        this.events();
    }

    /**
     * Send event to analytics
     *
     * @param  {string} category Event category
     * @param  {string} action   Event action
     * @param  {string} label    Event label
     * @param  {string} value    Event value
     */

    sendEvent(category, action, label, value = null) {

        if (category != null && label != null) {
            ga('send', 'event', category, action, label, value);
        } else {
            console.warn('Category and label are required for GA event bound on: ' + this);
        }

    }

    /**
     * Bind analytics helper events. Use event
     * namespace and delegated to document.
     */

    events () {
        var $document = $(document);

        // Generic click helper
        $document.on('click.analytics', '.js-ga-event', (e) => {
            var $this = $(this),
                category = $this.data('ga-category'),
                action = $this.data('ga-action'),
                label = $this.data('ga-label'),
                value = $this.data('ga-value')
            ;

            this.sendEvent(category, action || 'click', label, value);
        });

        // Generic hover helper
        $document.on('mouseover.analytics', '.js-ga-hover-event', (e) => {
            var $this = $(this),
                category = $this.data('ga-category'),
                action = $this.data('ga-action'),
                label = $this.data('ga-label'),
                value = $this.data('ga-value')
            ;

            this.sendEvent('send', 'event', category, action || 'hover', label, value);
        });

    }

}

export default AnalyticsHelper;
