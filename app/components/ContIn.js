import React, {PureComponent} from 'react';
import Navi from './Navi';
import Menu from './Menu';
import PresIn from './PresIn';

class ContIn extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navi title="ContIn" style={{zIndex:1201, position: 'fixed', top: 0}} />
        <div style={{display: 'flex'}}>
          <Menu style={{width:200, paddingTop:72}} />
          <div style={{padding: 20, paddingTop: 72}}>
            <PresIn />
          </div>
        </div>
      </div>
    );
  }
}

export default ContIn;

