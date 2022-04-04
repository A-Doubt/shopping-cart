export default function CartItem(props) {
	
	console.log('CartItem props: ', props)
	return (
		<div className="cart--item-card">
			<img src={props.itemsData.image} alt='product' />
			<div className="cart--item-data">
				<table>
					<caption>{props.itemsData.title}</caption>
					<thead>
						<tr>
							<th>Quantity</th>
							<th>Price</th>
							<th>Sum</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{props.quantity}</td>
							<td>€ {props.itemsData.price.toFixed(2)}</td>
							<td>€ {(props.quantity * props.itemsData.price).toFixed(2)}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
