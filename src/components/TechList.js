import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  };

  // Executado assim que o componente aparece en tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  // Executa quando o componente deixa de existir
  componentWillUnmount() {}


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();

    const { newTech, techs } = this.state

    if (!newTech) return;

    this.setState({
      techs: [...techs, newTech],
      newTech: ''
    })

  }

  handleRemove = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleRemove(tech)}
            />
          ))}
        </ul>
        <div>
          <input 
            type="text" 
            name="newTech"
            value={this.state.newTech}
            onChange={this.handleInputChange}
          />
          <button>Enviar</button>
        </div>
      </form>
    );
  }
}

export default TechList;