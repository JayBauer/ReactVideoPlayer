import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state  = { term: '' };
  }

  render() {
    return (
      Value of the input: {this.state.term};
      <input
      value={this.state.term}
      onChange={event => this.setState({ term: event.target.value })} />;
    );
  }

export default SearchBar;
