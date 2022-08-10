import { Component } from "react";

class Header extends Component {
    render(){
        return (
            <div>
                <div className="bg-cover bg-no-repeat bg-center h-12 w-12 rounded-lg" Style="background-image: url(/images/logo.jpeg);"></div>
            </div>
        );
    }
}

export default Header;