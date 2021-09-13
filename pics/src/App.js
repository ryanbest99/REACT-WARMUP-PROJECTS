import React from "react";
import SearchInput from "./components/SearchInput";
import unsplash from "./api/unsplash";
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = { images: [] };

  anonymous = async (value) => {
    console.log("Value in App.js: ", value);

    const res = await unsplash.get("/search/photos", {
      params: { query: value },
    });

    const images = res.data.results;
    // console.log(images);

    this.setState({ images: images });
  };

  render() {
    return (
      <div>
        <h1>App</h1>
        <SearchInput onSubmit={this.anonymous} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
