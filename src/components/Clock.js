import React from 'react';


class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state =({
            time : new Date().toLocaleTimeString(),
            date : new Date().toDateString()
        });
    }

    incrementCounter(){
        var options ={ hour12: true};
        this.setState({
            time : new Date().toLocaleTimeString('en-US',options),
            date : new Date().toDateString()
        });
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.incrementCounter(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID); 
    }
    render(){
        return(
            <div className="clock">
                <h2 className="time"> {this.state.time} </h2>
                <h2 className="date"> {this.state.date}</h2>
            </div>   
        );
    }
}

export default Clock;

