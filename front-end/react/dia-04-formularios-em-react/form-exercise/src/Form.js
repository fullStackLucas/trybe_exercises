import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChangeEstadoFavorito = this.handleChangeEstadoFavorito.bind(this);
    this.handleChangeIdade = this.handleChangeIdade.bind(this);
    this.handleChangeSobreVoce = this.handleChangeSobreVoce.bind(this);
    this.handleChangeVaiComparecer = this.handleChangeVaiComparecer.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      sobreVoce: '',
      vaiComparecer: false,
    };
  }


  handleChangeEstadoFavorito(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  handleChangeIdade(event) {
    this.setState({
      idade: event.target.value,
    });
  }

  handleChangeSobreVoce(event) {
    this.setState({
      sobreVoce: event.target.value,
    });
  }

  handleChangeVaiComparecer(event) {
    if (this.state.vaiComparecer === false) {
      return this.setState({
        vaiComparecer: true,
      });
    }
    this.setState({
      vaiComparecer: false,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChangeEstadoFavorito} />
          </label>
          <label>
            Qual a sua idade?
              <input
              type="number"
              name="idade"
              value={this.state.idade}
              onChange={this.handleChangeIdade}
              />
          </label>
          <label>
            Escreva algo Sobre Você
              <input
              type="textarea"
              name="sobreVoce"
              value={this.state.sobreVoce}
              onChange={this.handleChangeSobreVoce}
              />
          </label>
          <label>
            Vai comparecer?
              <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChangeVaiComparecer}
          />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;