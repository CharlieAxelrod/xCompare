import React, { Component } from 'react';

class Country extends Component {
  render() {
    let header;

    if (this.props.name === 'br') {
      header = this.props.language === 'pt'
      ? <div>Resultados do Brasil</div>
      : <div>Results for Brazil</div>
    } else {
      header = this.props.language === 'pt'
      ? <div>Resultados dos EUA</div>
      : <div>Results for USA</div>
    }

    return (
      <div>
        {header}
      </div>
    );
  }
}

export default Country;