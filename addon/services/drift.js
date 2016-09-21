import Ember from 'ember';

const { computed } = Ember;

function proxyMethod(name) {
  return function() {
    const drift = this.get('driftObject');
    const console = this.get('console');

    if(drift) {
      return drift[name](...arguments);
    }
    else if(console && console.warn) {
      console.warn('Drift is not initialized!');
    }
  };
}

export default Ember.Service.extend({

  driftObject: computed(function() {
    return window.drift;
  }),

  console: computed(function() {
    return window.console;
  }),

  identify: proxyMethod('identify'),
  track: proxyMethod('track'),
  reset: proxyMethod('reset'),
  debug: proxyMethod('debug'),
  show: proxyMethod('show'),
  ping: proxyMethod('ping'),
  page: proxyMethod('page'),
  hide: proxyMethod('hide'),
  off: proxyMethod('off'),
  on: proxyMethod('on'),

});
