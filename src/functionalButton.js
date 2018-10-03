import React, { PureComponent } from "react";

export default function FunctionalButton(props) {
	return <button onClick={e => props.addStore()}>{props.funcType}</button>;
}
