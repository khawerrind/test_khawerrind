import React, { Component } from 'react';
import Navi from './Navi';
import Menu from './Menu';
import BrowserStore from '../stores/BrowserStore';
import Constants from '../utils/Constants';
import PresOut from './PresOut';

class ContOut extends Component {
  constructor(props) {
    super(props);

    const state = this.getStateFromStore();
    this.state = state;
  }

  componentDidMount() {
    BrowserStore.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    BrowserStore.removeChangeListener(this.handleChange);
  }

  getStateFromStore = () => {
    const selections = BrowserStore.getItem(Constants.STORED_SELECTION, []);
    const values = BrowserStore.getItem(Constants.STORED_VALUE, []);

    const modifiedSelections = selections.map((val, i) => ({
      id: i + 1,
      name: val
    }));

    const modifiedValues = values.map((val, i) => ({
      id: i + 1,
      name: val
    }));

    return {selections: modifiedSelections, values: modifiedValues};
  }

  handleChange = () => {
    this.setState(this.getStateFromStore());
  }

  render() {
    const { selections, values } = this.state;

    return (
      <div>
        <Navi title="ContOut" style={{zIndex:1201, position: 'fixed', top: 0}} />
        <div style={{display: 'flex'}}>
          <Menu style={{width:200, paddingTop:72}} />
          <div style={{padding: 20, paddingTop: 72}}>
            <h2>Stored Selections</h2>
            <PresOut
              data={selections}
            />
            <h2>Stored Values</h2>
            <PresOut
              data={values}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContOut;
