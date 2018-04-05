import React from 'react';
import PropTypes from 'prop-types'; 
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Navi = props => (
  <AppBar position="absolute" style={props.style}>
    <Toolbar>
      <Typography variant="title" color="inherit">
        {props.title}
      </Typography>
    </Toolbar>
  </AppBar>
);

Navi.defaultProps = {
  style: {}
}

Navi.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object // eslint-disable-line react/forbid-prop-types
}

export default Navi;
