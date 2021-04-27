import React from 'react';

import SearchBar from './components/SearchBar';
import youtube from './components/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


class Dashboard extends React.Component {

  state = {videos: [], selectedVideo: null};

  componentDidMount(){
    this.onTermSubmit('타입스크립트')
    //    this.onTermSubmit('경력날조')
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params:{
        q: term,
        key:'AIzaSyAMDd6Jjv8tAvs6bnX1E89DvGDFdUEVPCg',
        type:'video',
        part:'snippet',
        maxResults:5
      }
      
    });

      this.setState({ 
        videos: response.data.items, 
        selectedVideo: response.data.items[0]
      });
    }


    
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render(){
    return (
      <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit}/>
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
              <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
export default Dashboard;
