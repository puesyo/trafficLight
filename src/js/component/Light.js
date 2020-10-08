import React, { useState, useEffect } from "react";
//import { func } from "prop-types";

export function TrafficLight() {
	const [light, setLight] = useState("");
	let addRedClass = "";
	let addYellowClass = "";
	let addGreenClass = "";
	// switch (light) {
	// 	case "red":
	// 		addClass = "selected";
	// 		break;
	// 	case "yellow":
	// 		addClass = "selected";
	// 		break;
	// 	case "green":
	// 		addClass = "selected";
	// 		break;
	// 	default:
	// 		addClass = "";
	// }
	if (light == "red") {
		addRedClass = "selected";
	} else if (light == "yellow") {
		addYellowClass = "selected";
	} else if (light == "green") {
		addGreenClass = "selected";
	} //else {
	//     addRedClass = "";
	//     addYellowClass = "";
	//     addGreenClass = "";
	// }

	// useEffect(() => {
	// 	() => setLight("red");
	// }, []);

	return (
		<div className="container">
			<div id="lightTop" />
			<div id="lightBox" className="row">
				<div
					className={"redlight" + " col " + addRedClass}
					onClick={() => setLight("red")}
				/>
				<div
					className={"yellowlight" + " col " + addYellowClass}
					onClick={() => setLight("yellow")}
				/>
				<div
					className={"greenlight" + " col " + addGreenClass}
					onClick={() => setLight("green")}
				/>
			</div>
		</div>
	);
}
