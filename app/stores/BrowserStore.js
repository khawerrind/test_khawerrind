import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

class BrowserStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  setItem(name, value) {
    this.setGlobalItem(name, value);
  }

  getItem(name, defaultValue) {
    return this.getGlobalItem(name, defaultValue);
  }

  removeItem(name) {
    this.removeGlobalItem(name);
  }

  setGlobalItem(name, value) {
    try {
      if (this.isLocalStorageSupported()) {
        localStorage.setItem(name, JSON.stringify(value));
      } else {
        sessionStorage.setItem(name, JSON.stringify(value));
      }
    } catch (err) {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload(true);
    }
  }

  getGlobalItem(name, defaultValue) {
    let result = null;
    try {
      if (this.isLocalStorageSupported()) {
        result = JSON.parse(localStorage.getItem(name));
      } else {
        result = JSON.parse(sessionStorage.getItem(name));
      }
    } catch (err) {
      result = null;
    }

    if (result === null && typeof defaultValue !== 'undefined') {
      result = defaultValue;
    }

    return result;
  }

  removeGlobalItem(name) {
    if (this.isLocalStorageSupported()) {
      localStorage.removeItem(name);
    } else {
      sessionStorage.removeItem(name);
    }
  }

  isLocalStorageSupported() {
    if (typeof this.checkedLocalStorageSupported !== 'undefined' && this.checkedLocalStorageSupported !== '') {
      return this.checkedLocalStorageSupported;
    }

    try {
      localStorage.setItem('__testLocal__', '1');
      if (localStorage.getItem('__testLocal__') !== '1') {
        this.checkedLocalStorageSupported = false;
      }
      localStorage.removeItem('__testLocal__', '1');

      this.checkedLocalStorageSupported = true;
    } catch (e) {
      this.checkedLocalStorageSupported = false;
    }

    try {
      sessionStorage.setItem('__testSession__', '1');
      sessionStorage.removeItem('__testSession__');
    } catch (e) {
      // Session storage not usable, website is unusable
      // Redirect to error page?
    }

    return this.checkedLocalStorageSupported;
  }
}

const BrowserStore = new BrowserStoreClass();

BrowserStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.STORE_ITEM: {
      BrowserStore.setItem(action.name, action.value);
      BrowserStore.emitChange();
      break;
    }
    default:
  }
});

export default BrowserStore;
