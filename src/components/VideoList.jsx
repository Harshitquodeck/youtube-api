import React from 'react';
import { Paper } from '@material-ui/core';

const VideoList= (SelectedVideo)=>{
    // let data= SelectedVideo.SelectedVideo[0];
    let videoSrc =SelectedVideo.SelectedVideo.map((a,i)=>{
    if(i===0){

        let videoUrl=`https://www.youtube.com/embed/${a.id.videoId}  `
        console.log(videoUrl);
        
        return videoUrl
    }
    // const videoScrc=`https://www.youtube.com/embed`+id;
    })
    
    return(
        <React.Fragment>
            <Paper elevation={6}>
        <iframe height="800px" width="100%" padding="20px" title="video player" src={videoSrc}/>

            </Paper>
        </React.Fragment>
    )
}
export default VideoList;