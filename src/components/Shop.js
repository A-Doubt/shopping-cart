import React from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import { nanoid } from 'nanoid';

function Shop() {

	const [itemsData, setItemsData] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);

	function addToCart(e, id, quantity) {
		console.log('added to cart');
		if (!quantity) return

		setCartItems((prevCart) => {
			if (!prevCart.length) return ([{id: id, quantity: quantity}])

			let newCart = [];
			let updatedItem;
			let isNewItem = false;

			prevCart.forEach((ele, index) => {
				newCart.push(ele);
				if (ele.id === id) {
					isNewItem = true;
					updatedItem = newCart.splice(index)
					updatedItem = {id: id, quantity: ele.quantity + quantity}
					newCart.push(updatedItem);
				}
			})
			if (!isNewItem) return ([...prevCart, {id: id, quantity: quantity}])
			else return newCart;
		})
	}

	React.useEffect(() => {
		console.table('cart: ', cartItems)
	}, [cartItems])

	React.useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=15')
			.then(res => res.json())
			.then(data => setItemsData(data))
	}, [])
	console.log(itemsData);

	const productElements = itemsData.map((ele) => {
		return (
			<ProductCard 
			name={ele.title} 
			imgsrc={ele.image}
			price={ele.price.toFixed(2)}
			handleClick={addToCart}
			key={nanoid()}
			id={ele.id}
			/>
		)
	})

	return (
		<div>
			<Header cart={cartItems} />
			<section  className="shop">
				<h1>SHOP</h1>
				<div className='shop--cards'>
					{productElements}
					{/* <ProductCard 
						name={data[0].item.name} 
						imgsrc={data[0].item.icon_large}
						price={data[0].item.current.price}
						description={data[0].item.description}
					/>
					<ProductCard />
					<ProductCard /> */}
				</div>
			</section>
		</div>
	)
}


export default Shop;
