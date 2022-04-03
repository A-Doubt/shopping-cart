import React from "react"

export default function ProductCard(props) {

	const [quantity, setQuantity] = React.useState(0)

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
		if (quantity > 999) return setQuantity(999)
		if (quantity < 0 || quantity === '' || isNaN(quantity)) return setQuantity(0)
	}, [quantity])

	return (
		<div className="card flex-column">
			<h3>{props.name}</h3>
			<img className="card--image" src={props.imgsrc} alt=''></img>
			<p>€{props.price}</p>
			<div>
				<button className="card--quantity-btn" onClick={subtractQuantity}>-</button>
				<input pattern="[0-9]*" value={quantity} onChange={handleChange}></input>
				<button className="card--quantity-btn" onClick={addQuantity}>+</button>
			</div>
			<button 
				type="button" 
				onClick={(e) => props.handleClick(e, props.id, quantity)}
			>
				Add to cart
			</button>
		</div>
	)
}