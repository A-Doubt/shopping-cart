import React from 'react';
import ProductCard from './ProductCard';
import { nanoid } from 'nanoid';

function Shop(props) {

	const productElements = props.itemsData.map((ele) => {
		return (
			<ProductCard 
				name={ele.title} 
				imgsrc={ele.image}
				price={ele.price.toFixed(2)}
				handleClick={(e, id, quantity, price) => props.handleClick(
					e, id, quantity, price)
				}
				key={nanoid()}
				id={ele.id}
			/>
		)
	})

	return (
		<div>
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
