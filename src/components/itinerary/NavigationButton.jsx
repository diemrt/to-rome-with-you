import { Component } from "react";
import { Link } from "react-router-dom";

class NavigationButton extends Component {

    render(){
        return (
            <Link to={this.props.link} className={`absolute ${this.props.positioning} h-5/6 w-28`}></Link>
        );
    }
}

export default NavigationButton;