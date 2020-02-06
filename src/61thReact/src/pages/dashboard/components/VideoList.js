import React from 'react';
import VideoItem from './VideoItem';

const videoList =({videos, onVideoSelect}) => {

    const renderList = videos.map((video, index) => {
        return (
            <VideoItem 
                onVideoSelect={onVideoSelect}
                video={video} 
                key={video.id.videoId} 
            />
        );
    });

    return (
    <div className="ui relaxed divided list">
        {renderList}
    </div>
    );
};

export default videoList;