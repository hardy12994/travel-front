/*
 * prevents rerendering if parent rerenders but render func not changed
 */
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class PureRenderer extends Component {
  static propTypes = {
    render: PropTypes.func
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const {render, ...other} = this.props;
    return render(other);
  }
}
