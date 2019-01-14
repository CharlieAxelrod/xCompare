import React, { Component } from 'react';

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
      {this.state.language === 'en' 
      ? <p>Compare prices Brazil - US</p> 
      : <p>Comparar precos Brasil - EUA</p>}
      </div>
    );
  }
}

export default Container;