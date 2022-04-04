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

	function calcTotal() {
		console.log('calc total');
		console.log(props.cartItems);
		let sum = 0;

		props.cartItems.forEach((ele) => {
			console.log(parseFloat(ele.price));
			sum += ele.quantity * parseFloat(ele.price);
		})
		return parseFloat(sum.toFixed(2));
	}

	function calcTax(price) {
		let tax = price * 0.08;
		return parseFloat(tax.toFixed(2));
	}

	const total = calcTotal()
	const tax = calcTax(total)
	const shipping = parseFloat((15).toFixed(2));

	console.log('total: ', total, 'tax: ', tax, 'shipping: ', shipping)

	return (
		<div className="cart">
			<h1>Shopping Cart (number of products: {props.cartQuantity})</h1>
			<p>Estimated delivery date: {formatedDate.dayName}, {formatedDate.date}</p>
			<div className="cart--items">
				<div className="cart--total">
					<table>
						<caption>Cart total</caption>
						<tbody>
							<tr>
								<td>Items in cart</td>
								<td>{props.cartQuantity}</td>
							</tr>
							<tr>
								<td>Product price total</td>
								<td>€ {total}</td>
							</tr>
							<tr>
								<td>TAX (8%)</td>
								<td>€ {tax}</td>
							</tr>
							<tr>
								<td>Shipping</td>
								<td>€ {shipping}</td>
							</tr>
						</tbody>
						<tfoot>
							<tr className="table--total">
								<td><br /> ORDER TOTAL</td>
								<td><br /> € {(total + tax + shipping).toFixed(2)}</td>
							</tr>
						</tfoot>
					</table>
				</div>
				<div>
					{cartItemsElements}
				</div>
			</div>
			<Link to="/shop">
				<button>Back to shop</button>
			</Link>
		</div>
	);
}

export default Cart;
