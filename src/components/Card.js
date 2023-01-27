import React from "react";

function Card(props) {
	const handleClick = (e) => {
		props.validateChoice(e.target.id);
	};
	return (
		<div className="card" id={props.data.name} onClick={handleClick}>
			<img src={props.data.image} alt={props.data.name} />
			<p>{props.data.name}</p>
		</div>
	);
}
export default Card;
