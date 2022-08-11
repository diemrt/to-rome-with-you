import { Component } from "react";

class Title extends Component {

    render(){
        return (
            <div className="text-7xl font-bold">
                <h1>{this.props.description}</h1>
            </div>
        );
    }
}


export default Title;