import {capitalize} from '@core/utils';

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DOMListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implement in ${this.name || ''}`
        );
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method].bind(this));
    });
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implement in ${this.name || ''}`
        );
      }
      this.$root.off(listener, this[method]);
    });
  }
}


function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
