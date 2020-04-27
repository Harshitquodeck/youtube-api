import React from 'react';
import { Grid } from "@material-ui/core"
import { SearchBar, VideoList, VideoDetails } from "./components/index";
import youtube from './api/youtube.js';
// import youtube from "./api/youtube;"
class App extends React.Component {
      state={
        SelectedVideo:[],
        video:[]
      }
  handleSubmit = async (searchTerms) => {
    const response = await youtube.get('search', {
      params: {
        part: "snippet",
        maxResult: 5,
        key: 'AIzaSyBGkmDjLAB6tk3ijUIjLQbzr9X3L8JwnfI',
        q:searchTerms,
        type:"video"
      }
    });
    // console.log(response.data.items);
    this.setState({SelectedVideo:response.data.items[0], video:response.data.items[0]})

  }
  render() {

    // let SearchBarStyle={
    //   marginTop:"2%",
    //   width:"100%",
    //   height:"10vh",
    //   color:"red",
    //   background:"green"
    // };
    return (
      <Grid>
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <SearchBar
              onFormSubmit={this.handleSubmit}
            />
          </Grid>
        </Grid>
        <Grid justify="center" container spacing={10}>
          <Grid item xs={6}>
          <VideoList 
            Videos={this.state.video}
            SelectedVideo={this.state.SelectedVideo}
            />
            
          </Grid>
          <Grid 
            item xs={4}>
           <VideoDetails 
             videos={this.state.Video}
             SelectedVideo={this.state.SelectedVideo}
            />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
export default App;