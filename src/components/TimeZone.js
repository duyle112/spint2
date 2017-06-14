import React from 'react';
import Hello from './Hello.js'
import Analog from './Analog.js'
class TimeZone extends React.Component {
    constructor (props) {
        super(props)
        this.state= {
            screens:this.getScreens()
        }
    }

    getScreens () {
        console.log("getScreens");
        var screens=[];
        var types =[Hello,Analog];
        for (let i = 0; i < this.props.url['screen-apps'].length; i++) {
            let type = this.props.url['screen-apps'][i]['type'];
            for (let j = 0; j < types.length; j++) {
                if (type === types[j].getType()) {
                    screens.push(types[j]);
                    break;
                }
            }
        }
        return screens;
    }

    changeComponent() {
        this.intervalId = this.setState(
            {
                screens:[...this.state.screens.slice(1),this.state.screens[0]]
            });
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
  }

    componentDidMount() {
        setInterval(() => this.changeComponent(),this.props.url['display-time']*1000)
    }
    render() {
        var Screen = this.state.screens[0];
        console.log("render");
        return (
            <div>
                <Screen />
            </div>
        );
    }
}
export default TimeZone;