//TODO: Fix: 2 + 3 + 4 =...then hitting *2. (2 Plus 3 Plus 4 Equal '9' then hit * 2)
//TODO: Get decimal working using decimalClicked

import React, { Component } from "react";
import NumberButton from "./numberButton";
import ClearButton from "./clearButton";
import PeriodButton from "./periodButton";
import FunctionalButton from "./functionalButton";
import EqualButton from "./equalButton";
import Output from './output.js';
import './App.css';


export default class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numbersInMemory: [],
			decimalClicked: false,
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
					case "+": {
						total += item;
						break;
					}
					case "-": {
						total -= item;
						break;
					}
					case "*": {
						total *= item;
						break;
					}
					case "/": {
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
			<div className='mainCalculator'>
				<Output 
					outputPhrase={this.state.workingPhrase}
					outputNumber={this.state.workingNumber}/>
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
								"/"
							],
								decimalClicked: false
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
							workingPhrase: [
								...this.state.workingPhrase,
								this.state.workingNumber, "*"],
								decimalClicked: false
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
							workingPhrase: [
								...this.state.workingPhrase,
								this.state.workingNumber, "-"],
								decimalClicked: false
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
				<PeriodButton 
					decimalClick={this.state.decimalClicked}
					handleClick={val => {
						this.numberButtonClick(val)
						this.setState({
							decimalClicked: true
						})
					}}
					/>
				<EqualButton handleMasterClick={() => {
						this.setState({
								workingPhrase: [
									...this.state.workingPhrase,
									this.state.workingNumber
								],
								decimalClicked: false
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
								"+"
							],
								decimalClicked: false
						});
						this.setState({ workingNumber: null });
					}}
					funcType={"+"}
				/>
				<ClearButton onClear={() => {
					this.setState({
						workingNumber: null,
						workingPhrase: []
					})
					}
				}/>
			</div>
		);
	}
}
