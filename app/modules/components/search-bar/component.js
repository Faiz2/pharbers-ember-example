import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    tagName: 'div',
    localClassNames: 'data-market',
    year: '2018',
    month: '07',
    time: computed('year', 'month' , function() {
        return `${this.get('year')}-${this.get('month')}`
    }),
});
