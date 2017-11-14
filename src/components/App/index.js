import React, { Component } from 'react';
import classnames from 'classnames';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('app align-flex center', className)} {...props}>
        <div className="app__block align-flex horizontal is-column">
          <h2>Iniciar sesión</h2>
          <div className="app__block__wrapper">
            <label>Usuario</label>
            <input type="text" placeholder="L000000@itesm.mx"/>
          </div>
          
          <div className="app__block__wrapper">
            <label>Contraseña</label>
            <input type="password" placeholder="********"/>
          </div>
          <a href="/incidents" className="button button__orange action">Ingresar</a>
        </div>
      </div>
    );
  }
}

export default App;
