import { Component } from "react";

class Body extends Component {

    render(){
        return (
            <div className={`static w-screen h-screen p-4 bg-${this.props.bgColor} text-${this.props.textColor}`}>
                {this.props.content}
            </div>
        );
    }
}

export default Body;