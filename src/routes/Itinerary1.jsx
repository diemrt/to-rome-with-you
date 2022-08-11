import { Component } from "react";
import Body from "../components/common/Body";
import Header from "../components/common/Header";

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
        return (
            <Body content={error ? (
                <div>Qualcosa è andato storto</div>
                ) : (!isLoaded ? (
                <div></div>
                ) : (
                <div className="h-full">  
                    <img className="z-0 absolute -left-24 -bottom-0" src="/images/adventure1.png" alt="adventure"></img>    
                    <Header progressBar={data.header.progressBar}></Header>
                    <div className="h-5/6 flex flex-col justify-between p-3">
                        
                    </div>
                </div>
            )) }></Body>
        );
    }
}

export default Itinerary1;