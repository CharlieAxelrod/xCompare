import React, { Component } from 'react';

class LanguageSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li onClick={(e) => this.props.changeLang('pt')}>
          PT
        </li>
        <li onClick={(e) => this.props.changeLang('en')}>
          EN
        </li>
      </ul>
    );
  }
}

export default LanguageSelector;