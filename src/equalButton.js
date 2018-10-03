import React, { PureComponent } from "react";

export default function EqualButton(props) {
	return <button onClick={e => props.handleMasterClick()}>=</button>;
}
