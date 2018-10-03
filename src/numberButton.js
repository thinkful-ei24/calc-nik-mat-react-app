import React, { PureComponent } from "react";

export default function NumberButton(props) {
	return (
		<button onClick={e => props.handleClick(props.btnNum)}>
			{props.btnNum}
		</button>
	);
}
