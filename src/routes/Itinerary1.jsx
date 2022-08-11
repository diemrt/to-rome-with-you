import { Component } from "react";
import Header from "../components/common/Header";
import IndicationsRecap from "../components/itinerary/IndicationsRecap";

class Itinerary1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: {}
        }
    }

    componentDidMount(){
        fetch('data/itinerary-1.json')
        .then((r) => r.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                data: result.data
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })
    }

    render(){
        const { error, isLoaded, data } = this.state;
        return (error ? (
                <div>Qualcosa è andato storto</div>
                ) : (!isLoaded ? (
                <div></div>
                ) : (
                <div className="static w-screen h-screen p-6 bg-white text-elm font-serif">
                    <div className="h-full">  
                        <img className="z-0 absolute -left-24 -bottom-0" src="/images/adventure1.png" alt="adventure"></img>    
                        <Header progressBar={data.header.progressBar}></Header>
                        <div className="flex flex-col justify-between p-3">
                            <div className="mt-5 text-2xl font-bold flex flex-row items-center">
                                <span class="material-symbols-outlined pr-4">flag</span>
                                <h1>{data.body.itinerary.title}</h1>
                            </div>                            
                            <IndicationsRecap from={data.body.itinerary.from} to={data.body.itinerary.to}></IndicationsRecap>
                        </div>
                    </div>
                </div>
            ))
        );
    }
}

export default Itinerary1;