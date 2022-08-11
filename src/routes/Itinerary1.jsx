import { Component } from "react";
import Header from "../components/common/Header";
import IndicationsRecap from "../components/itinerary/IndicationsRecap";
import NavigationButton from "../components/itinerary/NavigationButton";

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
                <div className="static w-screen h-screen bg-white text-elm font-serif">
                    <NavigationButton positioning="top-10 left-0" link={data.body.itinerary.links.previous}></NavigationButton>
                    <NavigationButton positioning="top-10 right-0" link={data.body.itinerary.links.next}></NavigationButton>
                    <div className="h-full"> 
                        <div className="p-6">
                            <img className="z-0 absolute -right-0 -top-20 overflow-x-hidden" src="/images/adventure2.png" alt="adventure"></img>    
                            <Header progressBar={data.header.progressBar}></Header>
                            <div className="flex flex-col justify-between p-3">
                                <div className="mt-5 text-2xl font-bold flex flex-row items-center">
                                    <span class="material-symbols-outlined pr-4">{data.body.itinerary.icon}</span>
                                    <h1>{data.body.itinerary.title}</h1>
                                </div>                            
                                <IndicationsRecap from={data.body.itinerary.from} to={data.body.itinerary.to}></IndicationsRecap>
                            </div>
                        </div>
                        <div className="h-3/5 bg-cover bg-no-repeat bg-center rounded-t-3xl shadow-inner" Style="background-image: url(/images/metro.jpg);"></div>
                    </div>
                </div>
            ))
        );
    }
}

export default Itinerary1;