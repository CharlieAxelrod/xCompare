import React, { Component } from 'react';
import Country from './Country.js';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: props.language,
    }
  }

  render() {
    return (
      <div>
        <div>
        {this.state.language === 'en' 
        ? <p>Compare prices Brazil - US</p> 
        : <p>Comparar precos Brasil - EUA</p>}
        </div>
        <div className="Brazil">
          <Country name="br" language={this.state.language} />
        </div>
        <div className="USA">
          <Country name="us" language={this.state.language} />
        </div>
      </div>
    );
  }
}

export default Container;