import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import Shop from './components/Shop';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
	const [cartItems, setCartItems] = React.useState([]);
	const [cartQuantity, setQuantity] = React.useState(cartItems);
	const [itemsData, setItemsData] = React.useState([]);

	React.useEffect(() => {
		const urls = [
			"https://fakestoreapi.com/products/category/men's clothing", 
			"https://fakestoreapi.com/products/category/women's clothing"
		]
		const promises = urls.map((url) => {
			return fetch(url).then(res => res.json())
		})

		// 2 arrays returned, merge them together and set the state
		Promise.all(promises).then(results => {
			let mergedResults = [];
			results[0].forEach(result => mergedResults.push(result));
			results[1].forEach(result => mergedResults.push(result));

			setItemsData(mergedResults)
		})
	}, [])

	console.log('itemsData: ', itemsData);

	React.useEffect(() => {
		let quantity = 0;

		cartItems.forEach((ele) => {
			quantity += ele.quantity;
		});
		setQuantity(quantity);
	}, [cartItems]);

	function addToCart(e, id, quantity, price) {
		console.log('added to cart');

		if (!quantity) return;

		setCartItems((prevCart) => {
			if (!prevCart.length) return [{ id: id, quantity: quantity, price: price }];

			let newCart = [];
			let updatedItem;
			let isNewItem = false;

			prevCart.forEach((ele, index) => {
				newCart.push(ele);
				if (ele.id === id) {
					isNewItem = true;
					updatedItem = newCart.splice(index);
					updatedItem = { id: id, quantity: ele.quantity + quantity, price: price };
					newCart.push(updatedItem);
				}
			});
			if (!isNewItem)
				return [...prevCart, { id: id, quantity: quantity, price: price}];
			else return newCart;
		});
	}

	React.useEffect(() => {
		console.table('cart: ', cartItems);
	}, [cartItems]);

	function addItem(data) {
		console.log(data)
		setCartItems((prevCart) => {
			let newCart = [];
			let updatedItem;

			prevCart.forEach((ele, index) => {
				newCart.push(ele)
				if (ele.id === data.id) {
					updatedItem = newCart.splice(index);
					updatedItem = { 
						id: data.id, 
						quantity: data.quantity + 1, 
						price: data.itemsData.price.toString() };
					newCart.push(updatedItem)
				}
			})

			console.log('prevCart: ', prevCart);
			console.log('newCart: ', newCart);
			return newCart;
		})
	}

	function subtractItem(data) {
		console.log(data)
		setCartItems((prevCart) => {
			let newCart = [];
			let updatedItem;

			prevCart.forEach((ele, index) => {
				newCart.push(ele)
				if (ele.id === data.id) {
					updatedItem = newCart.splice(index);
					updatedItem = { 
						id: data.id, 
						quantity: data.quantity - 1, 
						price: data.itemsData.price.toString() };
					if (updatedItem.quantity > 0) newCart.push(updatedItem)
				}
			})

			console.log('prevCart: ', prevCart);
			console.log('newCart: ', newCart);
			return newCart;
		})
	}

	function removeItem(data) {
		console.log(data);
		setCartItems((prevCart) => {
			return prevCart.filter((ele) => {
				return ele.id !== data.id;
			})
		})
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
						/>
					}
				/>
				<Route path="/about" element={<AboutUs />} />
				<Route path="/contact" element={<Contact />} />
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
