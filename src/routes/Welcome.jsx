import { Component } from "react";
import Body from "../components/common/Body";

class Welcome extends Component{



    render(){
        return (
            <Body bgColor="bg-crete" textColor="text-elm" content={(
                <div className="grid grid-cols-4 gap-4">
                    <div>01</div>
                    <div>09</div>
                    <div>09</div>
                    <div>09</div>
                    <div>09</div>
                    <div>09</div>
                </div> 
            )}></Body>
        );
    }
}

export default Welcome;