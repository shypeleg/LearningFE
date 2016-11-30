import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item';

class VideoList extends Component{
  constructor(props){
    super(props);
   
  }
  render ()
  {
      const videoItems = this.props.videos.map(v=>
        <VideoListItem 
            key={v.etag} 
            video={v} 
            onSelectVideo={this.props.onSelectVideo}  />)
      return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    )
  }
}

export default VideoList;