import { Component } from "react";
import ProgressBar from "./ProgressBar";

class Header extends Component {
    render(){
        return (
            <div>
                <ProgressBar color={this.props.progressBar.color} currentStep={this.props.progressBar.currentStep}></ProgressBar>
                <div className="ml-4 bg-cover bg-no-repeat bg-center h-12 w-12 rounded-lg" Style="background-image: url(/images/logo.jpeg);"></div>
            </div>
        );
    }
}

export default Header;