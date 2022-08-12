import { Component } from "react";

class IndicationsRecap extends Component {

    render(){
        return (
            <div className="mt-5 grid gird-row gap-3">
                <div className="flex flex-row items-center">
                    <div className="grid content-center justify-center h-9 w-9 bg-crete rounded-full">
                        <span className="material-symbols-outlined text-white text-base align-middle">circle</span>
                    </div>
                    <div className="grid grid-row ml-5">
                        <h1 className="font-semibold font-sans text-crete">{this.props.from.location}</h1>
                        <small className="font-sans text-elm">{this.props.from.departAt}</small>
                    </div>
                </div>
                <div className="h-8 ml-4 border-dashed border-l-2 border-l-elm"></div>
                <div className="flex flex-row items-center">
                    <div className="grid content-center justify-center h-9 w-9 bg-elm rounded-full">
                        <span class="material-symbols-outlined text-white text-base">location_on</span>
                    </div>
                    <div className="grid grid-row ml-5">
                        <h1 className="font-semibold font-sans text-elm">{this.props.to.location}</h1>
                        <small className="font-sans text-elm">{this.props.to.arriveAt}</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndicationsRecap;