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
			workingNumber: null,
			workingPhrase: []
		};
	}

	numberButtonClick(num) {
		if (this.state.workingNumber === null) {
			this.setState({ workingNumber: num });
		} else {
			let stringWork = this.state.workingNumber.toString();
			let stringValNum = num.toString();
			this.setState({
				workingNumber: Number(stringWork.concat(stringValNum))
			});
		}
	}

	masterOperatorReader() {
		const firstNum = this.state.workingPhrase[0];
		const secondNum = this.state.workingNumber;

		let total = 0;
		let lastOperation;

		if (this.state.workingPhrase[1] === "add") {
			for (let item of this.state.workingPhrase) {
				if (typeof item === "number" && !lastOperation) {
					total = item;
				}

				if (typeof item === "number" && lastOperation === "add") {
					total += item;
				}

				if (item === "add") {
					lastOperation = "add";
				}
			}
			this.setState({ workingNumber: total });
			console.log(total);
		}
		if (this.state.workingPhrase[1] === "subtract") {
			this.setState({ workingNumber: firstNum - secondNum });
			console.log(firstNum - secondNum);
		}
		if (this.state.workingPhrase[1] === "multiply") {
			this.setState({ workingNumber: firstNum * secondNum });
			console.log(firstNum * secondNum);
		}
		if (this.state.workingPhrase[1] === "divide") {
			this.setState({ workingNumber: firstNum / secondNum });
			console.log(firstNum / secondNum);
		}
	}

	render() {
		return (
			<div>
				<NumberButton
					handleClick={num => {
						this.numberButtonClick(num);
					}}
					btnNum={7}
				/>
				<NumberButton
					handleClick={num => {
						this.numberButtonClick(num);
					}}
					btnNum={8}
				/>
				<NumberButton
					handleClick={num => {
						this.numberButtonClick(num);
					}}
					btnNum={9}
				/>
				<FunctionalButton
					addStore={() => {
						this.setState({
							workingPhrase: [
								...this.state.workingPhrase,
								this.state.workingNumber,
								"divide"
							]
						});
						this.setState({ workingNumber: null });
					}}
					funcType={"/"}
				/>
				<br />
				<NumberButton
					handleClick={num => {
						this.numberButtonClick(num);
					}}
					btnNum={4}
				/>
				<NumberButton
					handleClick={num => {
						this.numberButtonClick(num);
					}}
					btnNum={5}
				/>
				<NumberButton
					handleClick={num => {
						this.numberButtonClick(num);
					}}
					btnNum={6}
				/>
				<FunctionalButton
					addStore={() => {
						this.setState({
							workingPhrase: [this.state.workingNumber, "multiply"]
						});
						this.setState({ workingNumber: null });
					}}
					funcType={"*"}
				/>
				<br />
				<NumberButton
					handleClick={num => {
						this.numberButtonClick(num);
					}}
					btnNum={1}
				/>
				<NumberButton
					handleClick={num => {
						this.numberButtonClick(num);
					}}
					btnNum={2}
				/>
				<NumberButton
					handleClick={num => {
						this.numberButtonClick(num);
					}}
					btnNum={3}
				/>
				<FunctionalButton
					addStore={() => {
						this.setState({
							workingPhrase: [this.state.workingNumber, "subtract"]
						});
						this.setState({ workingNumber: null });
					}}
					funcType={"-"}
				/>
				<br />
				<NumberButton
					handleClick={num => {
						this.numberButtonClick(num);
					}}
					btnNum={0}
				/>
				<PeriodButton />
				<EqualButton handleMasterClick={() => this.masterOperatorReader()} />
				<FunctionalButton
					addStore={() => {
						this.setState({
							workingPhrase: [
								...this.state.workingPhrase,
								this.state.workingNumber,
								"add"
							]
						});
						this.setState({ workingNumber: null });
					}}
					funcType={"+"}
				/>
				<ClearButton />
			</div>
		);
	}
}
