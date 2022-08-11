import { Component } from "react";
import Body from "../components/common/Body";
import Header from "../components/common/Header";
import StartButton from "../components/welcome/StartButton";
import Title from "../components/welcome/Title";

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: {}
        }
    }

    componentDidMount(){
        fetch('data/welcome.json')
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
                    <Header logo={data.header.logo} progressBar={data.header.progressBar}></Header>
                    <div className="h-5/6 flex flex-col justify-between p-3">
                        <Title description={data.body.welcome.title}></Title>
                        <div className="z-10 flex flex-col">
                            <small className="text-center font-bold">Inizia il {new Date(data.body.welcome.releaseDate).toLocaleDateString('it-It', {year: 'numeric', month: 'long', day: 'numeric'})}</small>
                            <StartButton releaseDate={data.body.welcome.releaseDate}></StartButton>
                        </div>
                    </div>
                </div>
            )) }></Body>
        );
    }
}

export default Welcome;