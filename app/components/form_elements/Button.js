import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function RaisedButtons(props) {
  const { classes, color, isDisabled, text, onClick } = props;
  return (
    <div>
      <Button
        variant="raised"
        color={color}
        disabled={isDisabled}
        className={classes.button}
        onClick={onClick}
      >
        {text}
      </Button>
    </div>
  );
}

RaisedButtons.defaultProps = {
  color: 'primary',
  isDisabled: false,
  text: 'Submit'
};

RaisedButtons.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(RaisedButtons);