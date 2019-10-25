import React, { Component } from "react";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box-component";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { robots, searchField } = this.state;
    const filteredrobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1>robots Rolodex</h1>
        <SearchBox
          placeholder="search robots"
          handleChange={this.handleChange}
        />
        <CardList robots={filteredrobots}></CardList>
      </div>
    );
  }
}
export default App;
