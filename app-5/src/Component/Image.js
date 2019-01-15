import React, {Component} from 'react';

class Image extends Component{
    render(){
        return(
            <div>
                <img src= {this.props.myImage} alt=""/>
            </div>
        )
    }
}

export default Image;