import React from 'react';
import axios from "axios";
import FollowersCard from "./FollowersCard";

class Followers extends React.Component {
  state = {
    followers: []
  };

  componentDidMount() {
    axios
    .get("https://api.github.com/users/bayronpuac/followers")
    .then ( res => {
      console.log(res);
      this.setState({
        followers: res.data
      });
    })
    .catch(err => console.log(err));
  }


  render() {
      return (
        <div className="followers">
        {this.state.followers.map(follower => {
          return (
            <div>
              <FollowersCard key={follower.login} follow={follower} />;
            </div>
          );
        })}
      </div>
      );
  }
}

export default Followers;
