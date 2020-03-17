import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorList extends Component {
  state = {
    filteredAuthors: this.props.authors
  };

  filteredAuthors = query => {
    query = query.toLowerCase();
    let filteredAuthors = this.props.authors.filter(author =>
      `${author.first_name} ${author.last_name}`.toLowerCase().includes(query)
    );
    this.setState({ filteredAuthors });
  };

  render() {
    const authorCards = this.state.filteredAuthors.map(author =>( 
      <AuthorCard key={author.first_name + author.last_name} author={author}/>)
    );

    return (
      <div>
        <h3>Authors</h3>
        <SearchBar onChange={this.filterAuthors} />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorList;
