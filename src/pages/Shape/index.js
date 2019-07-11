import React, { Component } from 'react'
import './index.css'

class Shape extends Component {

  constructor() {
    super()
    this.state = {
      shape: 'Square',
      color: 'Red',
      width: '',
      height: '',
      amount: '',
      show: false,
    }
    
  }

  onWidthChange = e => {
    this.setState({ width: e.target.value })
  }
  onHeightChange = e => {
    this.setState({ height: e.target.value })
  }
  onAmountChange = e => {
    this.setState({ amount: e.target.value })
  }

  onShapeChange = e => {
    this.setState({ shape: e.target.value });
  }

  onColorChange = e => {
    this.setState({ color: e.target.value });
  }

  onGenerate= () => {
    var isShowing = this.state.show;
    this.setState({ show: !isShowing });
  };
  

                                                                                                              
  render() {
    // var amount = this.state.amount;
    // for (amount = 0; amount + 1; amount++) {
    //   {result}
    // }
  //    

    const shapeMaker = this.state.shape;
    let result = [];

    if (shapeMaker === 'Square'){
      for(let i = 0; i < this.state.amount; i++){
        result.push (<div className="square" style={{ backgroundColor: this.state.color,
        width: this.state.width + 'px',
        height: this.state.height + 'px'
        }}/>)
      }
    }
      else{
        for(let i = 0; i < this.state.amount; i++){
          result.push (<div className="circle" style={{ backgroundColor: this.state.color,
          width: this.state.width + 'px',
          height: this.state.height + 'px'
          }}/>)
        }
    }

    
    return (
      <div>
        <h1>This is shape generator</h1>
        <label htmlFor="shapeId">Shape
        <select name="" id="" onChange={this.onShapeChange} value={this.state.shape}>
            <option value="Square">Square</option>
            <option value="Circle">Circle</option>
          </select>
        </label>
        <label htmlFor="colorId">Color
        <select name="" id="" onChange={this.onColorChange} value={this.state.color}>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
          </select>
        </label>
        <label htmlFor="sizeId">
          size
          <input style={{ width: 50 }} type="number" min="0" value={this.state.width} onChange={this.onWidthChange} />x
          <input style={{ width: 50 }} type="number" min="0" value={this.state.height} onChange={this.onHeightChange} />
        </label>
        <label htmlFor="amountId">
          amount
          <input style={{ width: 50 }} type="number" min="0" value={this.state.amount} onChange={this.onAmountChange} />
        </label>


        <button  className="btn-primary" disabled={this.state.shape === '' || this.state.color === '' || this.state.height === '' || this.state.width === '' || this.state.amount === ''} onClick={this.onGenerate}>Generate !</button>
        <div className="a">
        {this.state.show ? result : null}
        {this.state.show = false}
        </div>
      
      
      </div>
    );
  }
}




export default Shape