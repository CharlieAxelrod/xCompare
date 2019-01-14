import React, { Component } from 'react';

class SearchBar extends Component {
  
  render() {
    return (
      <div>
        {this.props.language === 'en'
        ? <div>searchbar</div>
        : <div>barra de pesquisa</div>}
      </div>
    );
  }
}

export default SearchBar;