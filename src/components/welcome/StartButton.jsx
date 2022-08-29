import { Component } from "react";
import { Link } from "react-router-dom";

class StartButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        }
    }

    componentDidMount(){
        this.setState({
            isActive: new Date() >= new Date(this.props.releaseDate)
        })
    }

    render(){
        let button = {};
        if(this.state.isActive){
            button = <Link className="w-fit flex flex-row align-center p-2 pl-3 pr-3 font-bold bg-white text-gasoline rounded-lg drop-shadow-md" to={this.props.link}>
                <span className="material-symbols-outlined pr-1">luggage</span>
                INIZIAMO
            </Link>      
        } else {
            button = <Link className="w-fit flex flex-row align-center p-2 pl-3 pr-3 font-bold bg-white text-gasoline rounded-lg drop-shadow-md disabled opacity-60" to="/">
                <span className="material-symbols-outlined pr-1">luggage</span>
                INIZIAMO
            </Link>
        }

        return (
            <div className="flex justify-center p-2 font-sans"> 
                {button}
            </div>
        );
    }
}

export default StartButton;