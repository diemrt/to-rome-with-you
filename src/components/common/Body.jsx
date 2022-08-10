import { Component } from "react";

class Body extends Component {

    render(){
        return (
            <div className={`static w-screen h-screen p-4 ${this.props.bgColor} ${this.props.textColor}`}>
                {this.props.content}
                <img className="absolute -left-24 -bottom-0 overflow-hidden" src="/images/adventure1.png" alt="adventure"></img>
            </div>
        );
    }
}

export default Body;