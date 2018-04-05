import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class TextArea extends React.Component {
  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="textarea"
          label="Enter value"
          placeholder="Enter value"
          multiline
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

TextArea.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(TextArea);