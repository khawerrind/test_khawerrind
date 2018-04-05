import React, { Component } from 'react';
import MultiSelect from './form_elements/MultiSelect';
import TextArea from './form_elements/TextArea';
import Button from './form_elements/Button';
import BrowserStore from '../stores/BrowserStore';
import Constants from '../utils/Constants';
import ActionCreators from '../actions/ActionCreators';

class PresIn extends Component {
  state = {
    selectValue: [],
    textareaValue: '',
    isSelectBtnDisabled: true,
    isValueBtnDisabled: true
  };

  handleSelectChange = (value) => {
    this.setState({selectValue: value}, function(){ // eslint-disable-line
      this.handleButtonDisableState();  
    });
  }

  handleTextAreaChange = (value) => {
    this.setState({textareaValue: value}, function(){ // eslint-disable-line
      this.handleButtonDisableState();  
    });
  }

  handleButtonDisableState = () => {
    const { selectValue, textareaValue } = this.state;
    this.setState({
      isSelectBtnDisabled: !selectValue.length,
      isValueBtnDisabled: !textareaValue.length
    });
  }

  handleSelectBtnClick = () => {
    const { selectValue } = this.state;
    const newSelections = [
      ...BrowserStore.getItem(Constants.STORED_SELECTION, []),
      selectValue.join(', ')
    ];

    ActionCreators.storeSelection(newSelections);
  }

  handleValueBtnClick = () => {
    const { textareaValue } = this.state;
    const newValues = [
      ...BrowserStore.getItem(Constants.STORED_VALUE, []),
      textareaValue
    ];

    ActionCreators.storeValue(newValues);
  }

  render() {
    return (
      <div>
        <MultiSelect
          onChange={this.handleSelectChange}
        />
        <Button
          isDisabled={this.state.isSelectBtnDisabled}
          onClick={this.handleSelectBtnClick}
        />
        <TextArea
          onChange={this.handleTextAreaChange}
        />
        <Button
          isDisabled={this.state.isValueBtnDisabled}
          onClick={this.handleValueBtnClick}
        />
      </div>
    );
  }
}

export default PresIn;
