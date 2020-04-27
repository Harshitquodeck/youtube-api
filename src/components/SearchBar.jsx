import React from "react";
import { Paper, TextField } from "@material-ui/core"


export default class SearchBar extends React.Component {
    state = {
        searchTerms: ""

    }

    handleChange = (event) => {
        // console.log(event.target.value);
        
        this.setState({searchTerms: event.target.value})
    }

    handleSubmit=(event)=>{
        const{searchTerms}=this.state;
        const{onFormSubmit}=this.props;

        onFormSubmit(searchTerms);

        event.preventDefault();

    }
    render() {
        return (
            <Paper elevation={6} style={{ padding: "25px" }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}>

                    </TextField>
                </form>
            </Paper>
        )
    }
}

//  SearchBar;