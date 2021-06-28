import React, { Component } from 'react'
import Buscador from './components/Buscador';



class App extends Component {

  state = {
    termino: 'Café'
  }

  cosultarApi = () => {
    const url = `https://pixabay.com/api/?key=19963715-4f70db65d59908dc7a1a2b103&q=${this.state.termino}`;
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        {this.state.termino}
      </div>
    );
  }
}

export default App;
