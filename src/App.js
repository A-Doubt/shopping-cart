import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' index element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App;
