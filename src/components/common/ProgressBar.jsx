import { Component } from "react";

class ProgressBar extends Component {

    renderStps(){
        const steps = 11;
        let element = []
        for (let i = 0; i < steps; i++) {
            if(i === this.props.currentStep){
                element.push(<div key={i.toString()} className={`h-1 ${this.props.color}`}></div>);
            } else {
                element.push(<div key={i.toString()} className={`h-1 ${this.props.color} opacity-30`}></div>);
            }
        }
        return element;
    }

    render(){
        return (
                <div className="grid grid-cols-11 gap-2 mb-3 mt-3">
                    {this.renderStps()}
                </div>
        );
    }
}

export default ProgressBar;