import React, { Component} from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: "n'to" };
  }
  render() {
    return (
      <div className="search-bar">
        <input onChange={(event) => this.onTextChanged(event.target.value)} />
      </div>
    );
  }
  onTextChanged(term){
    this.setState({ term });
    this.props.onTermChanged(term);
  }
}

  export default SearchBar;
