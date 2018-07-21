import Component from '@ember/component';

export default Component.extend({
    tagName: 'div',
    localClassNames: 'change-item',
    actions: {
        getYear: function(params) {
			this.set('year', params)
		},
		getMonth(params) {
			this.set('month', params)
		},
        submit() {
            this.attrs.onRefresh(this.get('year'), this.get('month'))
        }
    }
});
