import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="home">
			<div className="home--text">
				<h1 className="">Finest collection of clothes</h1>
				<h3>From all over the world</h3>
				<Link to="/shop">
					<button className="home--btn" type="button">
						Shop now
					</button>
				</Link>
			</div>
			<img
				className="hero-photo center"
				src={require('../assets/home-photo001ed2.jpg')}
				alt=""
			/>
			<div className="attributions">
				Photo by
				<a href="https://unsplash.com/@bruno_kelzer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Bruno Kelzer
				</a>
				on
				<a href="https://unsplash.com/s/photos/shopping-cart?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Unsplash
				</a>
				<br />
				Photo by
				<a href="https://unsplash.com/@hannahmorgan7?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Hannah Morgan
				</a>
				on
				<a href="https://unsplash.com/s/photos/clothes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
					Unsplash
				</a>
			</div>
		</div>
	);
}

export default Home;
