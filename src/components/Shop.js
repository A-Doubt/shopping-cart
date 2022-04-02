import Header from './Header';
import ProductCard from './ProductCard';

function Shop() {
	return (
		<div>
			<Header />
			<section  className="shop">
				<h1>SHOP</h1>
				<div className='shop--cards'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</section>
		</div>
	)
}

export default Shop;
