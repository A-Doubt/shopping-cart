import React from 'react';
import ProductCard from './ProductCard';
import { nanoid } from 'nanoid';
import ShopPopup from './ShopPopup';

function Shop(props) {
	const [popupVisible, setPopupVisible] = React.useState(false);

	function handleClickPopup(e) {
		props.handleCartFull()
		setPopupVisible(false);
	}

	const productElements = props.itemsData.map((ele) => {
		return (
			<ProductCard
				name={ele.title}
				imgsrc={ele.image}
				price={ele.price.toFixed(2)}
				handleClick={(e, id, quantity, price) => {
					setPopupVisible(true);
					props.handleClick(e, id, quantity, price);
				}}
				key={nanoid()}
				id={ele.id}
			/>
		);
	});

	return (
		<div>
			{popupVisible && (
				<ShopPopup
					popupVisible={popupVisible}
					handleClickPopup={handleClickPopup}
					cartFull={props.cartFull}
				/>
			)}
			<section className="shop">
				<h1>Browse our products</h1>
				<div className="shop--main">
					<div className="filters">
						Categories
						<label htmlFor="men">Men</label>
						<input type="checkbox" id="men"></input>
						<label htmlFor="women">Women</label>
						<input type="checkbox" id="women"></input>
					</div>
					<div className="shop--cards">{productElements}</div>
				</div>
			</section>
		</div>
	);
}

export default Shop;
