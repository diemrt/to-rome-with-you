import { Component } from "react";

class Body extends Component {

    render(){
        return (
            <div className="static w-screen h-screen p-4 bg-crete text-elm">
                {this.props.content}
            </div>
        );
    }
}

export default Body;