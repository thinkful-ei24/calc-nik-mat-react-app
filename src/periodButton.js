import React, { Component } from "react";

export default function PeriodButton(props) {
	console.log('in')
	if (props.decimalClick === false) {
		return <button onClick={(e) => props.handleClick('.')}>.</button>;
	} else {
		return <button>.</button>
	}
}
