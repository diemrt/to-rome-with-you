import { Component } from "react";

class ProgressBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            progressBarClass: `grid grid-cols-${props.steps} gap-4 mb-3 mt-3`
        }
    }

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
                <div className={this.state.progressBarClass}>
                    {this.renderStps()}
                </div>
        );
    }
}

export default ProgressBar;