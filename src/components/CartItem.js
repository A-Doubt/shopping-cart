export default function CartItem(props) {
	console.log(props.itemsData);
	return (
		<div>
			{props.itemsData ? (
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
													props.handleClickSubtract(
														props
													)
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
									<td>
										€ {props.itemsData.price.toFixed(2)}
									</td>
									<td>
										€{' '}
										{(
											props.quantity *
											props.itemsData.price
										).toFixed(2)}
									</td>
									<td>
										<button
											className="remove-btn"
											onClick={() =>
												props.handleClickRemove(props)
											}
										>
											❌
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}
