import React from 'react';
import { Link } from 'react-router-dom';

export default function Popup(props) {
	
	React.useEffect(() => {
		function closePopup(e) {
			if (e.target.className === 'popup--container') props.handleClickPopup();
		}
		window.addEventListener('click', closePopup);
		return () => {
			window.removeEventListener('click', closePopup);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className={
				props.popupVisible
					? 'popup--container'
					: 'popup--container invisible'
			}
		>
			<div className="popup--box center">
				{props.cartFull ? (
					<h2>
						<span>❌</span>Your cart is full!
					</h2>
				) : (
					<h2>
						<span>✔️</span>Item added to the cart!
					</h2>
				)}
				<div className="popup--buttons">
					<Link to="/cart">
						<button className="card--add-btn">Head to cart</button>
					</Link>
					<button
						className="card--add-btn"
						onClick={() => props.handleClickPopup()}
					>
						Continue shopping
					</button>
				</div>
			</div>
		</div>
	);
}
