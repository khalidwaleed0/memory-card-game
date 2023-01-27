import "./App.css";
import { useState } from "react";
import CardContainer from "./components/CardContainer.js";
const originalFood = importAll(require.context("./images/food", false, /\.(png|jpe?g|svg)$/));

function App() {
	const [score, setScore] = useState(0);
	const [highestScore, setHighestScore] = useState(0);
	const [food, setFood] = useState(originalFood);

	function win(selectedFood) {
		setScore((score) => score + 1);
		if (score === highestScore) setHighestScore(score + 1);
		updateClickedCard(selectedFood);
		shuffleCards();
	}
	function lose() {
		setScore(0);
		originalFood.forEach((f) => (f.clickedBefore = false));
		setFood(originalFood);
	}
	function shuffleCards() {
		let shuffledFood = originalFood.sort((a, b) => 0.5 - Math.random());
		setFood([]);
		setFood(shuffledFood);
	}
	function updateClickedCard(selectedFood) {
		selectedFood.clickedBefore = true;
	}
	function validateChoice(choice) {
		let selectedFood = food.find((f) => f.name === choice);
		if (!selectedFood.clickedBefore) win(selectedFood);
		else lose();
	}

	return (
		<div className="App">
			<header>
				<h1>Memory Card Game</h1>
				<div className="score-board">
					<p>Score: {score}</p>
					<p>Highest Score: {highestScore}</p>
				</div>
			</header>
			<main>
				<CardContainer food={food} validateChoice={validateChoice} />
			</main>
		</div>
	);
}

function importAll(r) {
	let images = [];
	r.keys().map((item) => {
		let name = item.replace(/(.\/)|(\..+)/g, "");
		images.push({ name, image: r(item), clickedBefore: false });
	});
	return images;
}

export default App;
