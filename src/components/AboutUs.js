export default function AboutUs() {
	return (
		<div className="about">
			<div>
				<div className="about--us">
					<h1 className="about--header">About us</h1>
					<p className="about--info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
				</div>
				<div className="about--contact">
					<h1 className="about--header">Contact</h1>
					<p>
						Do not hesitate to contact one of our qualified customer
						service representatives happy to answer all of your
						questions regarding our collection or any of our web
						services at:
					</p>
					<br />
					<p className="about-info">
						Email: <span>donotactuallywrite@clothes.com</span>
					</p>
				</div>
			</div>
			<div className="mapouter">
				<div className="gmap_canvas">
					<iframe
						width=""
						height="500"
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=Rajska%2010,%2080-850%20Gda%C5%84sk&t=&z=13&ie=UTF8&iwloc=&output=embed"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
						title="map"
					></iframe>
				</div>
			</div>
		</div>
	);
}
