import { Component } from "react";
import Header from "../components/common/Header";
import IndicationsRecap from "../components/itinerary/IndicationsRecap";
import NavigationButton from "../components/itinerary/NavigationButton";

class Itinerary4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: {}
        }
    }

    componentDidMount(){
        fetch('data/itinerary-4.json')
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
                <div className="static w-screen h-screen bg-elm text-white font-serif">
                    <NavigationButton positioning="top-10 left-0" link={data.body.itinerary.links.previous}></NavigationButton>
                    <NavigationButton positioning="top-10 right-0" link={data.body.itinerary.links.next}></NavigationButton>
                    <div className="h-full"> 
                        <div className="p-6">
                            <img className="z-0 absolute -right-0 -top-20 overflow-x-hidden" src="/images/adventure3.png" alt="adventure"></img>    
                            <Header progressBar={data.header.progressBar}></Header>
                            <div className="flex flex-col justify-between p-3">
                                <div className="mt-5 text-2xl font-bold flex flex-row items-center">
                                    <span class="material-symbols-outlined pr-4">{data.body.itinerary.icon}</span>
                                    <h1>{data.body.itinerary.title}</h1>
                                </div>                            
                                <IndicationsRecap from={data.body.itinerary.from} to={data.body.itinerary.to} isBackgroundElm={true} ></IndicationsRecap>
                            </div>
                        </div>
                        <div className="h-3/5 grid gird-row-2 bg-cover bg-no-repeat bg-center rounded-t-3xl shadow-inner" style={{backgroundImage: `url(${data.body.itinerary.bgImagePath})`}}>
                            <div className="flex justify-center">
                                <a target='_blank' rel="noreferrer" className="w-fit h-fit mt-8 flex flex-row align-center p-2 pl-3 pr-3 bg-crete text-elm rounded-lg drop-shadow-md font-bold font-sans" href={data.body.itinerary.mapLink}>
                                <span className="material-symbols-outlined pr-1">explore</span>
                                ANDIAMO
                             </a>
                            </div>
                            <div className="flex justify-end">
                                <p className="p-5 w-48 h-fit mr-4 bg-crete text-elm font-bold rounded-xl">{data.body.itinerary.curiosity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        );
    }
}

export default Itinerary4;