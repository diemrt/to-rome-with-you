import { Component } from "react";
import Body from "../components/common/Body";
import Header from "../components/common/Header";
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
                <div>      
                    <Header logo={data.header.logo} progressBar={data.header.progressBar}></Header>
                    <div className="flex flex-col justify-center p-3">
                        <Title></Title>
                        <small className="text-center font-bold">Inizia il {new Date(data.body.welcome.releaseDate).toLocaleDateString('it-It', {year: 'numeric', month: 'long', day: 'numeric'})}</small>
                    </div>                
                    <img className="absolute -left-24 -bottom-0" src="/images/adventure1.png" alt="adventure"></img>
                </div>
            )) }></Body>
        );
    }
}

export default Welcome;