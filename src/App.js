import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import Gallery from "./components/Gallery";
import GalleryNoThumb from "./components/GalleryNoThumb";
import Description from "./components/Description";




class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      },
    ]
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Title />
        <Gallery />
        <GalleryNoThumb />
      </div>
    );
  }
}
export default App;
