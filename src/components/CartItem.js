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
							<th>{props.quantity}</th>
							<th>€ {props.itemsData.price.toFixed(2)}</th>
							<th>€ {props.quantity * props.itemsData.price.toFixed(2)}</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
	
/*
<table id="example" class="display" style="width:100%">
	<thead>
		<tr>
			<th>Name</th>
			<th>Position</th>
			<th>Office</th>
			<th>Age</th>
			<th>Start date</th>
			<th>Salary</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Tiger Nixon</td>
			<td>System Architect</td>
			<td>Edinburgh</td>
			<td>61</td>
			<td>2011/04/25</td>
			<td>$320,800</td>
		</tr>
		<tr>
			<td>Garrett Winters</td>
			<td>Accountant</td>
			<td>Tokyo</td>
			<td>63</td>
			<td>2011/07/25</td>
			<td>$170,750</td>
		</tr>
		<tr>
			<td>Ashton Cox</td>
			<td>Junior Technical Author</td>
			<td>San Francisco</td>
			<td>66</td>
			<td>2009/01/12</td>
			<td>$86,000</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<th>Name</th>
			<th>Position</th>
			<th>Office</th>
			<th>Age</th>
			<th>Start date</th>
			<th>Salary</th>
		</tr>
	</tfoot>
</table>
*/
