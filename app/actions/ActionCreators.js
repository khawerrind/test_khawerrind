import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';
import Constants from '../utils/Constants';

const ActionCreators = {

  storeValue(values) {
    AppDispatcher.dispatch({
      type: ActionTypes.STORE_ITEM,
      name: Constants.STORED_VALUE,
      value: values
    });
  },

  storeSelection(selections) {
    AppDispatcher.dispatch({
      type: ActionTypes.STORE_ITEM,
      name: Constants.STORED_SELECTION,
      value: selections
    });
  },

};

export default ActionCreators;
