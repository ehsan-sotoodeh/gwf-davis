import React, { Component } from 'react';
import './Layer.css';
import './ColorScheme'
import ColorScheme from './ColorScheme';

class Layer extends Component {
    state = {
        id: this.props.layer.id,
        fileName: this.props.layer.fileName,
        visibleName: this.props.layer.visibleName,
        visible: this.props.layer.visible,
        colorScheme: this.props.layer.colorScheme
      };


  viewHide = (e) =>{
      let visibility = !this.state.visible 
      this.setState({
          visible : visibility
      })
      console.log(this.state)
  }
  changeColorScheme = (colorScheme) => {
      this.setState({colorScheme:colorScheme})
  }
  render(){
      return(
        <div className="Layer">
            <h1>{this.state.fileName}</h1>
            <h1>{this.state.visibleName}</h1>
            <h1>{this.state.id}</h1>
            <h1>{this.state.colorScheme}</h1>
            <ColorScheme changeColorScheme={this.changeColorScheme} />
            <button onClick={this.viewHide} >View/Hide</button>
        </div>
      )
  }
}

export default Layer;
