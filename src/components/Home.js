import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="home">
			<div className="home--text">
				<h1 className="">Finest collection of clothes</h1>
				<h3>From all over the world</h3>
				<Link to="/shop">
				<button className ="home--btn" type="button">Shop now</button>
			</Link>
			</div>
			<img 
				className="hero-photo center" 
				src={require("../assets/home-photo001ed2.jpg")} 
				alt=""
			/>
		</div>
	);
}

export default Home;
