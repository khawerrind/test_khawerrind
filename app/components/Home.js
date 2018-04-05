import React, {PureComponent} from 'react';
import Navi from './Navi';
import Menu from './Menu';

class Home extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Navi title="Welcome to demo of React/Flux" style={{zIndex:1201, position: 'fixed', top: 0}} />
        <div style={{display: 'flex'}}>
          <Menu style={{width:200, paddingTop:72}} />
          <div style={{padding: 20, paddingTop: 72}}>
            Please select from left navigation what you want to perform
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
