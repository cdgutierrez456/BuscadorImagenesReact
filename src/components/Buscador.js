import React, { Component } from 'react';

class Buscador extends Component {
    render() {
        return (
            <form action="">
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" id="" className="form-control form-control-lg" placeholder='Busca tu imagen. Ejemplo: Frutas'/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" id="" className="btn btn-lg btn-danger btn-block" value='Buscar...'/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;

