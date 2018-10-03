import React, { Component } from "react";
import NumberButton from "./numberButton";
import ClearButton from "./clearButton";
import PeriodButton from "./periodButton";
import FunctionalButton from "./functionalButton";
import EqualButton from "./equalButton";

export default class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numbersInMemory: [],
			calculatingState: false,
			workingNumber: 0,
			workingPhrase: []
		};
	}

	render() {
		return (
			<div>
				<NumberButton btnNum={7} />
				<NumberButton btnNum={8} />
				<NumberButton btnNum={9} />
				<FunctionalButton funcType={"/"} />
				<br />
				<NumberButton btnNum={4} />
				<NumberButton btnNum={5} />
				<NumberButton btnNum={6} />
				<FunctionalButton funcType={"*"} />
				<br />
				<NumberButton btnNum={1} />
				<NumberButton btnNum={2} />
				<NumberButton btnNum={3} />
				<FunctionalButton funcType={"-"} />
				<br />
				<NumberButton btnNum={0} />
				<PeriodButton />
				<EqualButton />
				<FunctionalButton funcType={"+"} />
				<ClearButton />
			</div>
		);
	}
}
