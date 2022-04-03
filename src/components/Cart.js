import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { nanoid } from 'nanoid';

function Cart(props) {

	const dayMiliseconds = 60 * 60 * 24 * 1000;

	function getDayName(dateNum) {
		const date = new Date(dateNum);
		return date.toLocaleDateString('en-GB', { weekday: 'long' });        
	}
	
	const formatedDate = {
		dayName: getDayName(new Date().getTime() + 2 * dayMiliseconds),
		date: new Date(new Date().getTime() + 2 * dayMiliseconds).toISOString().split('T')[0]
	}
	
	console.log('props: ', props)
	
	// create components from all items currently in cart
	const cartItemsElements = props.cartItems.map((item) => {

		// this makes sure only the needed item's data is passed
		let thisItemData;
		props.itemsData.forEach((ele) => {
			if (ele.id === item.id) thisItemData = ele;
		})

		// returns cart item will all needed data
		return <CartItem 
			itemsData={thisItemData}
			quantity={item.quantity}
			id={item.id}
			key={nanoid()}
		/>
	})

	return (
		<div className="cart">
			<h1>Shopping Cart (number of products: {props.cartQuantity})</h1>
			<p>Estimated delivery date: {formatedDate.dayName}, {formatedDate.date}</p>
			<div className="flex-row">
				<div>
					{cartItemsElements}
				</div>
				<div className="cart--total">
					<h2>CART--TOTAL h2</h2>
					<p>TAX HERE</p>
					<p>SHIPPING HERE</p>
					<p>TOTAL TOTAL HERE</p>
				</div>
			</div>
			<Link to="/shop">
				<button>Back to shop</button>
			</Link>
		</div>
	);
}

export default Cart;
