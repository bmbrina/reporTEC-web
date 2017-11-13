import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import './style.css';

export default class Incidents extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Incidents', className)} {...props}>
        <h1>
          Incidents
        </h1>
      </div>
    );
  }
}