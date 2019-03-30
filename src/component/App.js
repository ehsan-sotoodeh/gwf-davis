import React, {Component} from 'react'
import Layer from  './Layer';
import Tabs from './Tabs';
import Navbar from './Navbar'
import {BrowserRouter , Route} from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import axios from 'axios'

//http://gwf-demo.usask.ca:59304/?callback=jQuery33108447789195611668_1553983659508&_=1553983659509

class App extends Component {
    componentDidMount(){
        let url = 'http://gwf-demo.usask.ca:59304/?fileName=.nc&reqType=getAllLayers&callback=getAllLayersCB'
        axios.get(url)
        .then(res => {
            console.log(res);
        })
    }
    states = { 
        layers : [
            {id:1, fileName : "GraceProp" ,visibleName : "graceProVis", visible: true, colorScheme: "CS1" },
            {id:2, fileName : "SnowProp" ,visibleName : "SnowProVis", visible: true , colorScheme: "CS1" },
            {id:3, fileName : "SoliProp" ,visibleName : "SoilProVis", visible: true , colorScheme: "CS1" }
        ]
    }

    render(){
        let layersStr = this.states.layers.map(layer => {
            return <Layer key={layer.id} layer={layer} />
        });
        return(
            <BrowserRouter>
                <div className="App">
                    <h1>Welcome to my app</h1>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route path="/Admin" component={Admin} />
                    <Tabs />
                    {layersStr}
                </div>
            </BrowserRouter>
        )
    }
}

export default App