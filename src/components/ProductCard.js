import React from "react"

export default function ProductCard(props) {

	const [quantity, setQuantity] = React.useState(1)

	function handleChange(e) {
		setQuantity(parseInt(e.target.value, 10));
	}

	function addQuantity() {
		setQuantity((prevQuantity) => prevQuantity = prevQuantity + 1);
	}

	function subtractQuantity() {
		setQuantity((prevQuantity) => prevQuantity = prevQuantity - 1);
	}

	// makes quantity a valid 0-999 integer
	React.useEffect(() => {
		if (quantity > 99) return setQuantity(99)
		if (quantity < 1 || quantity === '' || isNaN(quantity)) return setQuantity(1)
	}, [quantity])

	return (
		<div className="card flex-column">
			<h3>{props.name}</h3>
			<img className="card--image" src={props.imgsrc} alt=''></img>
			<p className="card--price">€{props.price}</p>
			<div className="card--quantity">
				<button className="quantity-btn" onClick={subtractQuantity}>-</button>
				<input pattern="[0-9]*" value={quantity} onChange={handleChange}></input>
				<button className="quantity-btn" onClick={addQuantity}>+</button>
			</div>
			<button 
				className="card--add-btn"
				type="button" 
				onClick={(e) => props.handleClick(e, props.id, quantity, props.price)}
			>
				Add to cart
			</button>
		</div>
	)
}