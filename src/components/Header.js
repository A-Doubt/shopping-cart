import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '../assets/shopping-cart.svg';

function Header(props) {

	console.log('header render');
	console.log('props.cart: ', props.cart);

	const [cartQuantity, setQuantity] = React.useState(props.cart)

	React.useEffect(() => {
		let quantity = 0;

		props.cart.forEach((ele) => {
			console.log(ele);
			quantity += ele.quantity	
		})
		setQuantity(quantity)
	}, [props.cart]);


	return (
		<header>
			<Link to='/' style={{ textDecoration: 'none' }}>
				<button className="header--home-btn no-style-btn flex-row">
					<img className="header--logo" alt="" src={''}/>
					<h1>Shop name</h1>
				</button>
			</Link>
			<nav>
				<ul>
					<li>
						<Link to='/shop'>
							<button 
								className="header--nav-btn no-style-btn">
									PRODUCTS
							</button>
						</Link>
					</li>
					<li>
						<Link to='/about'>
							<button 
								className="header--nav-btn no-style-btn">
									ABOUT US
							</button>
						</Link>
					</li>
					<li>
						<Link to='/contact'>
							<button 
								className="header--nav-btn no-style-btn">
									CONTACT
							</button>
						</Link>
					</li>
				</ul>
			</nav>
			<Link to='/cart'>
				<button className="header--cart-btn no-style-btn">
					<img 
						className="header--cart-img" 
						src={ShoppingCartIcon} 
						alt='cart-icon'/>
					<span className="cart-amount">{cartQuantity}</span>
				</button>
			</Link>
		</header>
	)
}

export default Header;
