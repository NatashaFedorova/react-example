// App для player==================================================================

import { Component } from 'react';
import videos from '../../../data/videos.json';
import VideoList from './VideoList';
import PlayerBlock from './PlayerBlock';

export class App extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
      <div style={{ padding: 24 }}>
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <PlayerBlock url={this.state.selectedVideo} />
      </div>
    );
  }
}

export default App;
