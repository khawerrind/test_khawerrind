import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import List, { ListItem } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';

const Menu = (props) => (
  <Drawer variant="permanent" style={props.style}>
    <List style={props.style}>
      <ListItem component={Link} to="/">Home</ListItem>
      <ListItem component={Link} to="/contin">ContIn</ListItem>
      <ListItem component={Link} to="/contout">ContOut</ListItem>
    </List>
  </Drawer>
);

Menu.defaultProps = {
  style: {}
}

Menu.propTypes = {
  style: PropTypes.object // eslint-disable-line react/forbid-prop-types
}

export default Menu;
