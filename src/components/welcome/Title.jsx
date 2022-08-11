import { Component } from "react";

class Title extends Component {

    render(){
        return (
            <div className="text-7xl font-bold flex flex-col">
                <h1 className="p-4">{this.props.description}</h1>
                <span className="material-symbols-outlined text-3xl text-end">favorite</span>
            </div>
        );
    }
}


export default Title;