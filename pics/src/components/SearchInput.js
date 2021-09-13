import React from "react";

export default class SearchInput extends React.Component {
  state = { term: "" };

  onSearchSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log("searchinput term: ", this.state.term);
    this.props.onSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSearchSubmit}>
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}
