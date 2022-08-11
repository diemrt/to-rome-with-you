import { Component } from "react";

class ProgressBar extends Component {

    renderStps(){
        let element = []
        for (let i = 0; i < this.props.steps; i++) {
            if(i === this.props.currentStep){
                element.push(<div className="h-1 bg-white"></div>);
            } else {
                element.push(<div className="h-1 bg-white opacity-30"></div>);
            }
        }
        return element;
    }

    render(){
        return (
                <div className="grid grid-cols-8 gap-2 mb-3 mt-3">
                    {this.renderStps()}
                </div>
        );
    }
}

export default ProgressBar;