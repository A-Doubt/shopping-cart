import Header from './Header';
import { Link } from 'react-router-dom';

function Cart() {
	return (
		<div className="cart">
			<Header />
			<h1>Cart</h1>
			<Link to='/shop'>
				<button>Back to shop</button>
			</Link>
		</div>
	)
}

export default Cart;
