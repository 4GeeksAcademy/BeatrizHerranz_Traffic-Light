import React, { useState } from "react";

//create your first component

const Home = () => {
	const [activeColor, setActiveColor] = useState("");

	const cambiarColor = (color) => {
		setActiveColor(color);
	};

	return (
		<div className="container">
			<div id="semaforo" className="text-center bg-black p-3 rounded">
				<button 
					className={`light bg-danger ${activeColor === "red" ? "active" : ""}`} 
					onClick={() => cambiarColor("red")}
				></button>
				<button 
					className={`light bg-warning ${activeColor === "yellow" ? "active" : ""}`} 
					onClick={() => cambiarColor("yellow")}
				></button>
				<button 
					className={`light bg-success ${activeColor === "green" ? "active" : ""}`} 
					onClick={() => cambiarColor("green")}
				></button>
			</div>
		</div>
	);
};

export default Home;