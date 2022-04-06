import React from 'react';
import ProductCard from './ProductCard';
import { nanoid } from 'nanoid';
import ShopPopup from './ShopPopup';

function Shop(props) {
	const [popupVisible, setPopupVisible] = React.useState(false);
	const [filters, setFilters] = React.useState({
		men: true, 
		women: true
	});
	const [visibleItems, setVisibleItems] = React.useState(props.itemsData)

	React.useEffect(() => {
		setVisibleItems(() => {
			let newState = [];
			props.itemsData.forEach((ele) => {
				if((filters.men && ele.category === 'men\'s clothing')) {
					newState.push(ele);
				} else if (filters.women && ele.category === 'women\'s clothing') {
					newState.push(ele);
				}
			});
			return newState;
		});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filters.men, filters.women]);


	function handleClickPopup(e) {
		props.handleCartFull()
		setPopupVisible(false);
	}

	function handleCheckbox(e) {
		setFilters((oldState) => {
			if (e.target.value === 'men') {
				return {
					...oldState,
					men: !oldState.men
				}
			} else {
				return {
					...oldState,
					women: !oldState.women
				}
			}
		})
	}

	const productElements = visibleItems.map((ele) => {
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
						<h3>Categories</h3>
						<div className="filter">
							<input 
								type="checkbox" 
								id="men"
								value="men"
								checked={filters.men}
								onChange={handleCheckbox}>
							</input>
							<label htmlFor="men">Men</label>
						</div>
						<div className="filter">
							<input 
								type="checkbox" 
								id="women"
								value="women"
								checked={filters.women}
								onChange={handleCheckbox}>
								</input>
							<label htmlFor="women">Women</label>
						</div>
					</div>
					<div className="shop--cards">{productElements}</div>
				</div>
			</section>
		</div>
	);
}

export default Shop;
