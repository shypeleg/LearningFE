import _ from 'lodash'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCYFJJkruzHC26DKOHE1mKfNUMXIdAptYw';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos:[], 
      selectedVideo:null
    };
  
    this.videoSearch("n'to");

  }

 videoSearch(term) {
   YTSearch({key:API_KEY,term:term},(videos)=>
   {
     this.setState({
         videos:videos,
         selectedVideo:videos[0]});
   });
 }


  render ()
  {
    const debouncedVideoSearch = _.debounce(term=>{this.videoSearch(term)},350);
      return (
      <div>
      <SearchBar  onTermChanged={term=>debouncedVideoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos} 
          onSelectVideo={(video)=>this.setState({selectedVideo:video})}/>        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
