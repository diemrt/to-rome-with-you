import { Component } from "react";
import Header from "../components/common/Header";
import NavigationButton from "../components/itinerary/NavigationButton";

class Goodbye extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: {}
        }
    }

    componentDidMount(){
        fetch('data/goodbye.json')
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
                <div className="static w-screen h-screen bg-gasoline text-white font-serif">
                    <NavigationButton positioning="top-10 left-0" link={data.body.goodbye.links.previuos}></NavigationButton>
                    <div className="h-full"> 
                        <div className="p-6">
                            <img className="z-0 absolute -right-0 -top-0 overflow-x-hidden" src="/images/adventure5.png" alt="adventure5"></img>                            
                            <img className="z-0 absolute -left-24 -bottom-0" src="/images/adventure4.png" alt="adventure4"></img>    
                            <Header progressBar={data.header.progressBar}></Header>
                            <div className="flex flex-col justify-between p-3">
                                <div className="mt-5 text-2xl font-bold flex flex-row items-center">
                                    <span class="material-symbols-outlined pr-4">favorite</span>
                                    <h1>{data.body.goodbye.title}</h1>
                                </div>
                            </div>                            
                            <div className="z-10 h-5/6 flex flex-col justify-between p-3">
                                <div className="h-96 flex justify-center items-center">
                                    <div className="h-36 w-36 flex flex-col justify-center items-center border-dashed border-2 rounded-xl border-crete">
                                        <span class="material-symbols-outlined text-crete">add_a_photo</span>
                                        <small className="text-crete font-bold">Il tuo ricordo di oggi</small>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-center">{new Date(data.body.goodbye.date).toLocaleDateString('it-It', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        );
    }
}

export default Goodbye;