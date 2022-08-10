import { Component } from "react";
import Body from "../components/common/Body";
import Header from "../components/common/Header";
import Settings from '../data/welcome.json';

class Welcome extends Component{
    render(){
        return (
            <Body bgColor={Settings.data.body.bgColor} textColor={Settings.data.body.textColor} content={(
                <div>      
                    <Header logo={Settings.data.header.logo} progressBar={Settings.data.header.progressBar}></Header>                
                    <div className="grid grid-cols-4 gap-4">
                        <div>01</div>
                        <div>09</div>
                        <div>09</div>
                        <div>09</div>
                        <div>09</div>
                        <div>09</div>
                    </div> 
                    <img className="absolute -left-24 -bottom-0" src="/images/adventure1.png" alt="adventure"></img>
                </div>
            )}></Body>
        );
    }
}

export default Welcome;