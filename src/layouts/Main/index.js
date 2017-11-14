import React, { Component } from 'react';
import classnames from 'classnames';
import logo from './logo-white.svg';

class Main extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('main', className)} {...props}>
        <div className="main__navigation align-flex between">
          <h2 className="main__navigation__logo"><a href="/">REPORTEC</a></h2>
          <nav className="align-flex center">
            <a href="/incidents" className="main__navigation__item">Ver Incidentes</a>
            <a href="/" className="main__navigation__item">Salir</a>
          </nav>
        </div>
        {this.props.children}
        <footer className="main__footer align-flex between">
          <img src={logo} alt="logo" />
          <div className="align-flex center">
            <small>&copy; Copyright 2017, REPORTEC</small>
          </div>
        </footer>
      </div>
    );
  }
}

export default Main;
