import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language
    }
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(newLang){
    this.setState({
      language: newLang
    });
  }

  render() {
    return (
      <div>
        <SearchBar language={this.state.language} />
        <LanguageSelector changeLang={this.changeLanguage} />
      </div>
    ); 
  }
}

export default App;
