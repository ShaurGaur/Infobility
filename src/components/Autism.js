import React, { Component } from 'react';
import { Tab, Tabs, CardTitle, CardActions, Button, Card, CardText, Grid, Cell } from 'react-mdl';


class Autism extends Component{
    toggleCatergories(){
        return(
        <div>
        <Card shadow = {5}>
            <CardTitle style = {{color: "cyan", fontweight: "bold", height:"200px"}}>Module 1</CardTitle>
            <CardText> Module 1 Information</CardText>
            <CardActions>
                <Button>Open</Button>
                <Button>Preview</Button>
            </CardActions>
        </Card>
        <Card shadow = {5}>
            <CardTitle style = {{color: "cyan", fontweight: "bold", height:"200px"}}>Module 2</CardTitle>
            <CardText> Module 2 Information</CardText>
            <CardActions>
                <Button>Open</Button>
                <Button>Preview</Button>
            </CardActions>
        </Card>
        <Card shadow = {5}>
            <CardTitle style = {{color: "cyan", fontweight: "bold", height:"200px"}}>Module 3</CardTitle>
            <CardText> Module 3 Information</CardText>
            <CardActions>
                <Button>Open</Button>
                <Button>Preview</Button>
            </CardActions>
        </Card>
        <Card shadow = {5}>
            <CardTitle style = {{color: "cyan", fontweight: "bold", height:"200px"}}>Module 4</CardTitle>
            <CardText> Module 4 Information</CardText>
            <CardActions>
                <Button>Open</Button>
                <Button>Preview</Button>
            </CardActions>
        </Card>
        </div>
        );
    }
    
    render(){
        return(
            <div>
                {this.toggleCatergories()}
            </div>

        )
    }
}

export default Autism;