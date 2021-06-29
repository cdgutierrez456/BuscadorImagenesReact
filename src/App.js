import React, { Component } from 'react'
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';



class App extends Component {

  state = {
    termino: '',
    imagenes: []
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=19963715-4f70db65d59908dc7a1a2b103&q=${termino}&per_page=30`;
    // console.log(url);

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes: resultado.hits}))

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
        <Resultado/>
      </div>
    );
  }
}

export default App;
