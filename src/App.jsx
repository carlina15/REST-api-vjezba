import React, { Component } from 'react';
import axios from 'axios';
import Photo from './Photo';
import PhotoDetails from './PhotoDetails';

class App extends Component {
  state = {
    imageUrl: '',
    title: '',
    explanation: '',
  };

  componentDidMount() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        const { url, title, explanation } = response.data;
        this.setState({ imageUrl: url, title, explanation });
  
      });
  }

  render() {
    const { imageUrl, title, explanation } = this.state;

    return (
      <div className="App">
        <h1>NASA - Photo of the Day!</h1>
        <Photo url={imageUrl} title={title} />
        <PhotoDetails title={title} explanation={explanation} />
      </div>
    );
  }
}

export default App;
