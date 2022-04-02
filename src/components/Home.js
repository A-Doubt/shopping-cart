import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="home">
			<h1>Home Page</h1>
			<Link to="/shop">
				<button type="button">Click Me!</button>
			</Link>
		</div>
	);
}

export default Home;
