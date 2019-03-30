import React, { Component } from 'react';

class ColorScheme extends Component{
    changeColorScheme = (e) =>{
        this.props.changeColorScheme(e.target.name)
    }
    render(){
        return(
            <div className="ColorScheme"> 
                <b/>
                <button name="colorPalette1" onClick={this.changeColorScheme} style={{backgroundColor:"#00ff00"}}>SC1</button>
                <button name="colorPalette2" onClick={this.changeColorScheme} style={{backgroundColor:"#ffff00"}}>SC2</button>
                <button name="colorPalette3" onClick={this.changeColorScheme} style={{backgroundColor:"#00ffff"}}>SC3</button>
                <button name="colorPalette4" onClick={this.changeColorScheme} style={{backgroundColor:"#0000ff"}}>SC4</button>
                <button name="colorPalette5" onClick={this.changeColorScheme} style={{backgroundColor:"#ff0000"}}>SC5</button>
                <b/>
            </div>
        )
    }
}

export default ColorScheme;