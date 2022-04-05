export default function CartItem(props) {
	
	console.log('CartItem props: ', props)
	return (
		<div className="cart--item-card">
			<img src={props.itemsData.image} alt="product" />
			<div className="cart--item-data">
				<table>
					<caption>{props.itemsData.title}</caption>
					<thead>
						<tr>
							<th>Quantity</th>
							<th>Price</th>
							<th>Sum</th>
							<th>Remove</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div className="cart--item-quantity">
									<button
										className="quantity-btn"
										onClick={() =>
											props.handleClickSubtract(props)
										}
									>
										-
									</button>
									{props.quantity}
									<button
										className="quantity-btn"
										onClick={() =>
											props.handleClickAdd(props)
										}
									>
										+
									</button>
								</div>
							</td>
							<td>€ {props.itemsData.price.toFixed(2)}</td>
							<td>
								€{' '}
								{(
									props.quantity * props.itemsData.price
								).toFixed(2)}
							</td>
							<td><button 
								className="remove-btn"
								onClick={() => props.handleClickRemove(props)}
							>❌</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

// eslint-disable-next-line no-lone-blocks
{/* 
<div>
	<button className="card--quantity-btn" onClick={subtractQuantity}>-</button>
	<input pattern="[0-9]*" value={quantity} onChange={handleChange}></input>
	<button className="card--quantity-btn" onClick={addQuantity}>+</button>
</div> 
*/}