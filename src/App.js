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
		let total = 0;
		let lastOperation;

		for (let item of this.state.workingPhrase) {
			if (typeof item === "number" && !lastOperation) {
				total = item;
			}

			if (typeof item === "number" && lastOperation) {
				switch (lastOperation) {
					case "add": {
						total += item;
						break;
					}
					case "subtract": {
						total -= item;
						break;
					}
					case "multiply": {
						total *= item;
						break;
					}
					case "divide": {
						total /= item;
						break;
					}
					default: {
						break;
					}
				}
			}

			if (typeof item !== "number") {
				lastOperation = item;
			}
		}
		this.setState({ workingNumber: total });
		console.log(total);
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
				<EqualButton handleMasterClick={() => {
						this.setState({
								workingPhrase: [
									...this.state.workingPhrase,
									this.state.workingNumber
								]
							}, () => this.masterOperatorReader())
					}
				}
					 />
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
