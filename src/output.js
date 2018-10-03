import React from "react";
import './output.css';

export default function Output(props) {
  return (
  <div className='outputScreen'>
    <span className='topScreen'>{props.outputPhrase}</span>
    <br />
    <span className='mainScreen'>{props.outputNumber}</span>
  </div>
    )
}