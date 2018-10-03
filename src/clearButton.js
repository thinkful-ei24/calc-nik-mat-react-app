import React, { Component } from "react";

export default function ClearButton(props) {
	return (
		<div>
			<button onClick={() => props.onClear()}>C</button>
		</div>
	);
}
