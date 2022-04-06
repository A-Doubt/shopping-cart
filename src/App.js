import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import Shop from './components/Shop';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
	const [cartItems, setCartItems] = React.useState([]);
	const [cartQuantity, setQuantity] = React.useState(cartItems);
	const [itemsData, setItemsData] = React.useState([]);
	const [cartFull, setCartFull] = React.useState(false);

	// gather data from an API
	React.useEffect(() => {
		const urls = [
			"https://fakestoreapi.com/products/category/men's clothing",
			"https://fakestoreapi.com/products/category/women's clothing",
		];
		const promises = urls.map((url) => {
			return fetch(url).then((res) => res.json());
		});

		// 2 arrays returned, merge them together and set the state
		Promise.all(promises).then((results) => {
			let mergedResults = [];
			results[0].forEach((result) => mergedResults.push(result));
			results[1].forEach((result) => mergedResults.push(result));

			setItemsData(mergedResults);
		});
	}, []);

	// calculate quantity of items in cart on each change of cartItems
	React.useEffect(() => {
		let quantity = 0;

		cartItems.forEach((ele) => {
			quantity += ele.quantity;
		});
		setQuantity(quantity);
	}, [cartItems]);

	function addToCart(e, id, quantity, price) {
		if (!quantity) return;
		if (cartQuantity + quantity > 999) {
			setCartFull(true);
			return;
		}

		setCartItems((prevCart) => {
			if (!prevCart.length)
				return [{ id: id, quantity: quantity, price: price }];

			// new cart not to mutate prevCart
			let newCart = [];
			let updatedItem;
			let isOldItem = false;

			prevCart.forEach((ele, index) => {
				newCart.push(ele);

				// if that item has already been in the cart change the quantity only
				if (ele.id === id) {
					isOldItem = true;
					updatedItem = newCart.splice(index);
					updatedItem = {
						id: id,
						quantity: ele.quantity + quantity,
						price: price,
					};
					newCart.push(updatedItem);
				}
			});
			if (!isOldItem)
				return [
					...prevCart,
					{ id: id, quantity: quantity, price: price },
				];
			else return newCart;
		});
	}

	function addItem(data) {
		setCartItems((prevCart) => {
			// new cart not to mutate prevCart
			let newCart = [];
			let updatedItem;

			prevCart.forEach((ele, index) => {
				newCart.push(ele);
				if (ele.id === data.id) {
					updatedItem = newCart.splice(index);
					updatedItem = {
						id: data.id,
						quantity: data.quantity + 1,
						price: data.itemsData.price.toString(),
					};
					newCart.push(updatedItem);
				}
			});
			return newCart;
		});
	}

	function subtractItem(data) {
		setCartItems((prevCart) => {
			let newCart = [];
			let updatedItem;

			prevCart.forEach((ele, index) => {
				newCart.push(ele);
				if (ele.id === data.id) {
					updatedItem = newCart.splice(index);
					updatedItem = {
						id: data.id,
						quantity: data.quantity - 1,
						price: data.itemsData.price.toString(),
					};
					if (updatedItem.quantity > 0) newCart.push(updatedItem);
				}
			});
			return newCart;
		});
	}

	function removeItem(data) {
		setCartItems((prevCart) => {
			return prevCart.filter((ele) => {
				return ele.id !== data.id;
			});
		});
	}

	function handleCartFull() {
		setCartFull(false);
	}

	return (
		<BrowserRouter>
			<Header cartQuantity={cartQuantity} />
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route
					path="/shop"
					element={
						<Shop
							handleClick={addToCart}
							cartItems={cartItems}
							cartQuantity={cartQuantity}
							itemsData={itemsData}
							cartFull={cartFull}
							handleCartFull={handleCartFull}
						/>
					}
				/>
				<Route path="/about" element={<AboutUs />} />
				<Route
					path="/cart"
					element={
						<Cart
							cartItems={cartItems}
							cartQuantity={cartQuantity}
							itemsData={itemsData}
							handleClickAdd={addItem}
							handleClickSubtract={subtractItem}
							handleClickRemove={removeItem}
						/>
					}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
