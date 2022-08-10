import { Component } from "react";

class ProgressBar extends Component {
    renderStps(){
        let element = []
        for (let i = 0; i < this.props.steps; i++) {
            if(i === this.props.currentStep){
                element.push(<div>01</div>);
            } else {
                element.push(<div>02</div>);
            }
        }
        return element;
    }

    render(){
        return (
                <div className="grid grid-cols-5 gap-4">
                    {this.renderStps()}
                </div>
        );
    }
}

export default ProgressBar;