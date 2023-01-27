import React from "react";
import Card from "./Card.js";
function CardContainer(props) {
	return (
		<div className="card-container" key={Date.now()}>
			{props.food.map((f) => {
				return <Card data={f} key={f.name + "-" + Date.now()} validateChoice={props.validateChoice} />;
			})}
		</div>
	);
}
export default CardContainer;
