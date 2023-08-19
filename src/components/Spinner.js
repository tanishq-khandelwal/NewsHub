import React, { Component } from 'react'
import Spinner from './Spinner-1s-200px.png'

export default class SpinnerComponent extends Component {
  render() {
    return (
      <div className='text-center'><img src={Spinner} alt="Loading" style={{backgroundColor:"black"}}></img></div>
    )
  }
}
