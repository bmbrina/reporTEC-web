import React, { Component } from 'react';
import classnames from 'classnames';
import logo from './logo.svg';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <h1 className="App__title">reporTEC</h1>
      </div>
    );
  }
}

export default App;
