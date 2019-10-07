import React from 'react';
import './App.css';
import axios from "axios";
import User from './components/User';
import Followers from './components/Followers';

class App extends React.Component {
  state = {
    user: []
  };

  componentDidMount() {
    axios
    .get("https://api.github.com/users/bayronpuac")
    .then ( res => {
      console.log(res);
      this.setState({
        user: res.data
      });
    })
    .catch(err => console.log(err));
  }


  render() {
      return (
        <div className="App">
          <User githubUser={this.state.user} />
          <h4>Followers</h4>
          <Followers />
        </div>
      );
  }
}

export default App;
