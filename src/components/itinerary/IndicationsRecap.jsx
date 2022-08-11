import { Component } from "react";

class IndicationsRecap extends Component {

    render(){
        return (
            <div className="mt-5 grid gird-row gap-3">
                <div className="flex flex-row">
                    <div className="h-9 w-9 bg-crete rounded-full"></div>
                </div>
                <div className="h-8 ml-4 border-dashed border-l-2 border-l-elm"></div>
                <div className="flex flex-row">
                    <div className="h-9 w-9 bg-elm rounded-full"></div>
                </div>
            </div>
        )
    }
}

export default IndicationsRecap;